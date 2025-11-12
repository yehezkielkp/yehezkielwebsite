#!/bin/bash

###############################################################################
# Oura Studios Website - cPanel Auto Deployment Script
# This script automatically deploys the website when git pull is triggered
###############################################################################

echo "=========================================="
echo "Starting Oura Studios Website Deployment"
echo "=========================================="

# Navigate to project directory
cd "$(dirname "$0")" || exit 1

# Pull latest changes
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

# Check if package.json has changed
if git diff HEAD@{1} --name-only | grep -q "package.json"; then
  echo "📦 package.json changed, installing dependencies..."
  npm ci --production
else
  echo "✅ No dependency changes detected"
fi

# Build the Next.js application
echo "🔨 Building Next.js application..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
  
  # Restart Node.js application (adjust based on your cPanel setup)
  echo "🔄 Restarting application..."
  
  # Option 1: If using PM2
  # pm2 restart oura-website
  
  # Option 2: If using cPanel Node.js app selector
  # touch tmp/restart.txt
  
  # Option 3: Manual restart via cPanel
  echo "⚠️  Please restart the Node.js application in cPanel manually"
  
  echo ""
  echo "=========================================="
  echo "✅ Deployment Completed Successfully!"
  echo "=========================================="
  echo ""
  echo "Next Steps:"
  echo "1. Verify the website is running correctly"
  echo "2. Check browser console for any errors"
  echo "3. Test all pages and functionality"
  echo ""
else
  echo "❌ Build failed! Please check the errors above"
  exit 1
fi
