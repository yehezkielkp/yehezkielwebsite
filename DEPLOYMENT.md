# 🚀 Oura Studios - cPanel Deployment Guide

Complete guide untuk deploy Oura Studios website ke cPanel dengan auto-deployment dari GitHub.

## 📋 Prerequisites

- ✅ cPanel account dengan SSH access
- ✅ Node.js tersedia di cPanel (versi 18+)
- ✅ GitHub repository
- ✅ Domain/subdomain configured

## 🔧 Setup cPanel Git Auto-Deploy

### Step 1: Prepare GitHub Repository

```bash
# Initialize git (jika belum)
cd /path/to/Oura Website
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Production ready"

# Add remote (ganti dengan repo Anda)
git remote add origin https://github.com/your-username/oura-studios-website.git

# Push ke GitHub
git push -u origin main
```

### Step 2: Setup Git in cPanel

1. **Login ke cPanel**
2. **Git Version Control** → Create Repository
3. Fill in details:
   ```
   Repository Path: /home/username/repositories/oura-website
   Clone URL: https://github.com/your-username/oura-studios-website.git
   Repository Name: oura-website
   ```
4. **Clone Repository**

### Step 3: Setup Node.js Application

1. **cPanel** → **Setup Node.js App**
2. Create Application:
   ```
   Node.js Version: 18.x or higher
   Application Mode: Production
   Application Root: repositories/oura-website
   Application URL: yourdomain.com (or subdomain)
   Application Startup File: node_modules/next/dist/bin/next
   ```
3. **Environment Variables** (Optional):
   ```
   NODE_ENV=production
   PORT=3000
   ```
4. Click **Create**

### Step 4: Configure Auto-Deployment

#### Method A: Using cPanel Git Deployment (Recommended)

1. Edit `.cpanel.yml` in repository root:

```yaml
---
deployment:
  tasks:
    # Set deployment path
    - export DEPLOYPATH=/home/username/public_html
    - /bin/cp -R * $DEPLOYPATH
    - cd $DEPLOYPATH
    
    # Install dependencies (production only)
    - /usr/local/bin/npm ci --production
    
    # Build Next.js
    - /usr/local/bin/npm run build
    
    # Create restart file for Node.js app
    - touch tmp/restart.txt
```

2. **Enable "Pull and Deploy"** in cPanel Git interface

#### Method B: Using Git Hook (Alternative)

1. SSH into cPanel:
```bash
ssh username@yourdomain.com
cd ~/repositories/oura-website/.git/hooks
```

2. Create post-merge hook:
```bash
nano post-merge
```

3. Add script:
```bash
#!/bin/bash
cd /home/username/public_html

# Pull changes
git pull origin main

# Install dependencies if package.json changed
if git diff HEAD@{1} --name-only | grep -q "package.json"; then
  npm ci --production
fi

# Build
npm run build

# Restart app
touch tmp/restart.txt
```

4. Make executable:
```bash
chmod +x post-merge
```

### Step 5: Initial Deployment

```bash
# SSH to cPanel
ssh username@yourdomain.com

# Navigate to web root
cd ~/public_html

# Clone repository
git clone ~/repositories/oura-website/.git .

# Install dependencies
npm ci --production

# Build
npm run build

# Start application (via cPanel Node.js interface)
# or manually:
npm start
```

## 🔄 Automatic Deployment Workflow

Once configured, deployment is automatic:

```
1. Developer: git push origin main
   ↓
2. GitHub receives push
   ↓
3. cPanel Git detects changes
   ↓
4. Runs .cpanel.yml tasks
   ↓
5. Builds application
   ↓
6. Restarts Node.js app
   ↓
7. ✅ Website updated!
```

## 📝 Deployment Checklist

Before pushing to production:

- [ ] Run `npm run build` locally (no errors)
- [ ] Test all pages work correctly
- [ ] Check all images/videos load
- [ ] Verify no console errors in browser
- [ ] Update environment variables in cPanel (if needed)
- [ ] Test mobile responsiveness
- [ ] Check page load speed

## ⚙️ cPanel Configuration

### 1. Node.js App Settings

```
Application Root: /home/username/repositories/oura-website
Application URL: https://ourastudios.com
Application Startup File: node_modules/next/dist/bin/next
Arguments: start -p 3000
```

### 2. Environment Variables (Optional)

```
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://ourastudios.com
PORT=3000
```

### 3. Domain Setup

- Ensure domain points to cPanel server
- SSL certificate installed (Let's Encrypt)
- HTTPS redirect enabled

## 🔍 Monitoring & Maintenance

### Check Application Status

```bash
# Via cPanel Node.js App interface
# or via SSH:
ps aux | grep node
```

### View Logs

```bash
# Check application logs
cd ~/public_html
tail -f logs/app.log

# Check build logs
cat .next/build-manifest.json
```

### Restart Application

**Option 1: cPanel Interface**
- Go to Setup Node.js App
- Click "Restart"

**Option 2: SSH**
```bash
cd ~/public_html
touch tmp/restart.txt
```

**Option 3: PM2 (if installed)**
```bash
pm2 restart oura-website
pm2 logs oura-website
```

## ⚡ Performance Optimization

### Enable Compression

In `.htaccess`:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Cache Headers

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Conflict

```bash
# Change port in cPanel Node.js app settings
# Or update package.json:
"scripts": {
  "start": "next start -p 3001"
}
```

### Permission Issues

```bash
# Fix permissions
chmod -R 755 ~/public_html
chown -R username:username ~/public_html
```

### Out of Memory

```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

## 📞 Support

For deployment issues:
- Email: tech@ourastudios.com
- Check cPanel error logs
- Contact hosting provider support

## 🔐 Security Notes

- ✅ Never commit `.env` files
- ✅ Use strong passwords for cPanel
- ✅ Keep Node.js updated
- ✅ Regular security audits
- ✅ Enable SSL/TLS
- ✅ Configure firewall rules

## 📈 Post-Deployment

After successful deployment:

1. ✅ Visit website: https://ourastudios.com
2. ✅ Test all pages and navigation
3. ✅ Check Google PageSpeed Insights
4. ✅ Submit sitemap to Google Search Console
5. ✅ Configure monitoring/uptime alerts
6. ✅ Setup backups

---

**Last Updated:** November 2025  
**Version:** 1.0.0  
**Maintained by:** Oura Studios Team
