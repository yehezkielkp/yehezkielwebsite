#!/bin/bash

###############################################################################
# Oura Studios Website - One-Click Deploy Script
# Deploy dari local langsung ke hosting DomaiNesia
###############################################################################

set -e  # Exit on any error

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration - GANTI DENGAN INFO HOSTING ANDA
SSH_USER="ourastud"
SSH_HOST="yourdomain.com"  # Ganti dengan domain atau IP hosting
SSH_PORT="21098"  # Port SSH, biasanya 22 atau port custom dari DomaiNesia
APP_PATH="/home1/ourastud/app"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}🚀 Oura Studios - Auto Deploy Script${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Step 1: Check if there are uncommitted changes
echo -e "${YELLOW}📝 Checking for uncommitted changes...${NC}"
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}⚠️  You have uncommitted changes!${NC}"
    echo -e "${YELLOW}Commit message (or press Enter to skip commit):${NC}"
    read -r COMMIT_MSG
    
    if [[ -n "$COMMIT_MSG" ]]; then
        echo -e "${BLUE}📦 Committing changes...${NC}"
        git add .
        git commit -m "$COMMIT_MSG

Co-authored-by: factory-droid[bot] <138933559+factory-droid[bot]@users.noreply.github.com>"
    else
        echo -e "${YELLOW}⚠️  Skipping commit. Deploying current state...${NC}"
    fi
fi

# Step 2: Push to GitHub
echo ""
echo -e "${BLUE}📤 Pushing to GitHub...${NC}"
git push origin main
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Successfully pushed to GitHub${NC}"
else
    echo -e "${RED}❌ Failed to push to GitHub${NC}"
    exit 1
fi

# Step 3: Deploy to hosting via SSH
echo ""
echo -e "${BLUE}🚀 Deploying to hosting server...${NC}"
echo -e "${YELLOW}Connecting to: ${SSH_USER}@${SSH_HOST}:${SSH_PORT}${NC}"
echo ""

ssh -p ${SSH_PORT} ${SSH_USER}@${SSH_HOST} << 'ENDSSH'
set -e

echo "=========================================="
echo "📥 Pulling latest code from GitHub..."
echo "=========================================="

cd /home1/ourastud/app

# Pull latest changes
git pull origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pulled latest code"
else
    echo "❌ Failed to pull from GitHub"
    exit 1
fi

echo ""
echo "=========================================="
echo "📦 Installing dependencies..."
echo "=========================================="

# Install dependencies (production only)
npm install --production

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "=========================================="
echo "🔨 Building Next.js application..."
echo "=========================================="

# Build Next.js
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "=========================================="
echo "✅ Deployment Completed Successfully!"
echo "=========================================="
echo ""
echo "📝 Next Steps:"
echo "1. Restart Node.js application in cPanel"
echo "2. Or the app will auto-restart in a few seconds"
echo "3. Visit your website to verify"
echo ""
echo "Deployed at: $(date)"
echo ""

ENDSSH

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}🎉 DEPLOYMENT SUCCESSFUL!${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo -e "${BLUE}📋 Summary:${NC}"
    echo -e "  ✅ Code pushed to GitHub"
    echo -e "  ✅ Code pulled to hosting"
    echo -e "  ✅ Dependencies installed"
    echo -e "  ✅ Application built"
    echo ""
    echo -e "${YELLOW}🔄 Next Steps:${NC}"
    echo -e "  1. Login to cPanel"
    echo -e "  2. Go to 'Setup Node.js App'"
    echo -e "  3. Click 'Restart' on your application"
    echo -e "  4. Visit your website!"
    echo ""
else
    echo ""
    echo -e "${RED}========================================${NC}"
    echo -e "${RED}❌ DEPLOYMENT FAILED${NC}"
    echo -e "${RED}========================================${NC}"
    echo ""
    echo -e "${YELLOW}Please check the error messages above${NC}"
    exit 1
fi
