# Deployment Instructions

## 🚀 Backend Deployment (Render)

### 1. Supabase Setup
1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Navigate to SQL Editor
3. Run the schema from `server/database/supabase-schema.sql`
4. Verify the `contact_messages` table is created

### 2. Render Backend Deployment
1. Go to https://render.com and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Select the `server` folder as root directory
5. Configure:
   - **Name**: `portfolio-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### 3. Environment Variables (Render)
Add these in Render dashboard → Environment:
```
NODE_ENV=production
PORT=10000
SUPABASE_URL=https://ohqmltkjxbdlwljygjvl.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ocW1sdGtqeGJkbHdsanlnanZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NTgyMDMsImV4cCI6MjA3MzQzNDIwM30.4CFlbulyjVc6DiGLREjhd90R47LgsyLWF2adhvki4mk
SUPABASE_SECRET_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ocW1sdGtqeGJkbHdsanlnanZsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Nzg1ODIwMywiZXhwIjoyMDczNDM0MjAzfQ.g5_MIP3_CRgjVHApNkJQoj0cT6lSIaCmk5JP_HFR3b0
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ariyofaruq1@gmail.com
SMTP_PASS=xhpi vcwr iozn rmuq
SMTP_FROM=ariyofaruq1@gmail.com
ADMIN_EMAIL=ariyofaruq1@gmail.com
```

## 🌐 Frontend Deployment (Vercel)

### 1. Vercel Frontend Deployment
1. Go to https://vercel.com and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Select the `client` folder as root directory
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 2. Environment Variables (Vercel)
Add in Vercel dashboard → Settings → Environment Variables:
```
VITE_API_URL=https://your-render-backend-url.onrender.com
```

### 3. Update CORS Origins
After deployment, update the CORS origins in your backend:
1. Get your Vercel URL (e.g., `https://portfolio-abc123.vercel.app`)
2. Update `server/.env` or Render environment variables:
```
CLIENT_URL_PROD=https://your-vercel-url.vercel.app
```

## 🔄 Post-Deployment Steps

### 1. Update API URL in Frontend
Update `client/.env`:
```
VITE_API_URL=https://your-render-backend-url.onrender.com
```

### 2. Update CORS in Backend
Update the CORS configuration in `server/server.js` with your actual Vercel URL.

### 3. Test the Deployment
1. Visit your Vercel frontend URL
2. Test the contact form
3. Check Render logs for any errors
4. Verify emails are being sent

## 🛠️ Quick Deploy Commands

### Backend (if using Git deployment)
```bash
cd server
git add .
git commit -m "Deploy to Render"
git push origin main
```

### Frontend (if using Git deployment)
```bash
cd client
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

## 📋 Checklist
- [ ] Supabase database schema created
- [ ] Render backend deployed
- [ ] Environment variables configured on Render
- [ ] Vercel frontend deployed
- [ ] Environment variables configured on Vercel
- [ ] CORS origins updated
- [ ] Contact form tested
- [ ] Email functionality verified

## 🔗 URLs to Update
After deployment, update these URLs in your code:
- Backend URL in `client/.env`
- Frontend URL in `server/.env` CORS configuration
- Any hardcoded URLs in the frontend components