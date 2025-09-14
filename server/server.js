import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://your-portfolio.vercel.app', 'https://your-custom-domain.com']
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact form submissions per hour
  message: {
    error: 'Too many contact form submissions, please try again later.'
  }
});

app.use(limiter);

// Email transporter setup
const createEmailTransporter = () => {
  return nodemailer.createTransport({   // ✅ fixed from createTransporter → createTransport
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT), // ✅ ensure port is numeric
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}; 
 
// Validation middleware
const validateContactForm = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  
  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: 'All fields are required',
      details: 'Please fill in all required fields: name, email, subject, and message.'
    });
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Invalid email format',
      details: 'Please provide a valid email address.'
    });
  }
  
  // Length validation
  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({
      error: 'Invalid name length',
      details: 'Name must be between 2 and 100 characters.'
    });
  }
  
  if (subject.length < 5 || subject.length > 200) {
    return res.status(400).json({
      error: 'Invalid subject length',
      details: 'Subject must be between 5 and 200 characters.'
    });
  }
  
  if (message.length < 10 || message.length > 2000) {
    return res.status(400).json({
      error: 'Invalid message length',
      details: 'Message must be between 10 and 2000 characters.'
    });
  }
  
  next();
};

// Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, validateContactForm, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const timestamp = new Date().toISOString();
    const clientIp = req.ip || req.connection.remoteAddress;
    
    // Store in Supabase
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: name.trim(),
          email: email.toLowerCase().trim(),
          subject: subject.trim(),
          message: message.trim(),
          ip_address: clientIp,
          created_at: timestamp,
          status: 'new'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({
        error: 'Database error',
        details: 'Failed to store your message. Please try again or contact us directly.'
      });
    }

    // Send email notification
    try {
      const transporter = createEmailTransporter();
      
      // Email to admin (you)
      const adminMailOptions = {
        from: process.env.SMTP_FROM,
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4361ee;">New Contact Form Submission</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
              <p><strong>IP:</strong> ${clientIp}</p>
            </div>
            <div style="background: #fff; padding: 20px; border-left: 4px solid #4361ee;">
              <h3>Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        `
      };
      
      // Auto-reply to user
      const userMailOptions = {
        from: process.env.SMTP_FROM,
        to: email,
        subject: `Thank you for contacting HafTech - ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4361ee;">Thank You for Your Message!</h2>
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to us. I've received your message about "<strong>${subject}</strong>" and will get back to you within 24 hours.</p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Your Message Summary:</h3>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Sent:</strong> ${new Date(timestamp).toLocaleString()}</p>
            </div>
            
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Check out my <a href="https://your-portfolio.vercel.app/#portfolio" style="color: #4361ee;">latest projects</a></li>
              <li>Connect with me on <a href="https://wa.me/+2348128653553" style="color: #25d366;">WhatsApp</a> for immediate assistance</li>
              <li>Follow me on <a href="https://linkedin.com/in/haftech" style="color: #0077b5;">LinkedIn</a></li>
            </ul>
            
            <p>Looking forward to discussing your project!</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p><strong>Ariyo Faruq</strong><br>
              CEO & Founder, HafTech<br>
              <a href="mailto:contact@haftech.com" style="color: #4361ee;">contact@haftech.com</a><br>
              <a href="tel:+2348128653553" style="color: #4361ee;">+234 8128 653 553</a></p>
            </div>
          </div>
        `
      };
      
      // Send both emails
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions)
      ]);
      
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the request if email fails, message is already stored
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
      data: {
        id: data[0].id,
        timestamp: timestamp
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Server error',
      details: 'Something went wrong. Please try again later or contact us directly.'
    });
  }
});

// Get contact messages (admin only - add authentication as needed)
app.get('/api/admin/messages', async (req, res) => {
  try {
    // Add authentication middleware here in production
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      data: data,
      count: data.length
    });

  } catch (error) {
    console.error('Admin messages error:', error);
    res.status(500).json({
      error: 'Server error',
      details: 'Failed to fetch messages.'
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({
    error: 'Internal server error',
    details: 'Something went wrong on our end.'
  });
});
app.use(/.*/, (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    details: `The requested endpoint ${req.originalUrl} does not exist.`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Supabase URL: ${supabaseUrl ? 'Connected' : 'Not configured'}`);
});

export default app;