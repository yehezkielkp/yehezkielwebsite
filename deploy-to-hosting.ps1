# Oura Studios Website - One-Click Deploy Script (PowerShell)
# Deploy dari local langsung ke hosting DomaiNesia

# Configuration - GANTI DENGAN INFO HOSTING ANDA
$SSH_USER = "ourastud"
$SSH_HOST = "yourdomain.com"  # Ganti dengan domain atau IP hosting
$SSH_PORT = "21098"  # Port SSH DomaiNesia
$APP_PATH = "/home1/ourastud/app"

Write-Host "========================================" -ForegroundColor Blue
Write-Host "🚀 Oura Studios - Auto Deploy Script" -ForegroundColor Blue
Write-Host "========================================" -ForegroundColor Blue
Write-Host ""

# Step 1: Check for uncommitted changes
Write-Host "📝 Checking for uncommitted changes..." -ForegroundColor Yellow
$gitStatus = git status -s

if ($gitStatus) {
    Write-Host "⚠️  You have uncommitted changes!" -ForegroundColor Yellow
    $commitMsg = Read-Host "Commit message (or press Enter to skip)"
    
    if ($commitMsg) {
        Write-Host "📦 Committing changes..." -ForegroundColor Blue
        git add .
        git commit -m "$commitMsg`n`nCo-authored-by: factory-droid[bot] <138933559+factory-droid[bot]@users.noreply.github.com>"
    } else {
        Write-Host "⚠️  Skipping commit. Deploying current state..." -ForegroundColor Yellow
    }
}

# Step 2: Push to GitHub
Write-Host ""
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Blue
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
    exit 1
}

# Step 3: Deploy to hosting via SSH
Write-Host ""
Write-Host "🚀 Deploying to hosting server..." -ForegroundColor Blue
Write-Host "Connecting to: $SSH_USER@$SSH_HOST`:$SSH_PORT" -ForegroundColor Yellow
Write-Host ""

$sshCommand = @"
cd $APP_PATH && \
echo '==========================================' && \
echo '📥 Pulling latest code from GitHub...' && \
echo '==========================================' && \
git pull origin main && \
echo '' && \
echo '==========================================' && \
echo '📦 Installing dependencies...' && \
echo '==========================================' && \
npm install --production && \
echo '' && \
echo '==========================================' && \
echo '🔨 Building Next.js application...' && \
echo '==========================================' && \
npm run build && \
echo '' && \
echo '==========================================' && \
echo '✅ Deployment Completed Successfully!' && \
echo '==========================================' && \
echo '' && \
echo '📝 Next Steps:' && \
echo '1. Restart Node.js application in cPanel' && \
echo '2. Or the app will auto-restart in a few seconds' && \
echo '3. Visit your website to verify' && \
echo '' && \
echo 'Deployed at: ' && date
"@

ssh -p $SSH_PORT "$SSH_USER@$SSH_HOST" $sshCommand

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "🎉 DEPLOYMENT SUCCESSFUL!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Summary:" -ForegroundColor Blue
    Write-Host "  ✅ Code pushed to GitHub"
    Write-Host "  ✅ Code pulled to hosting"
    Write-Host "  ✅ Dependencies installed"
    Write-Host "  ✅ Application built"
    Write-Host ""
    Write-Host "🔄 Next Steps:" -ForegroundColor Yellow
    Write-Host "  1. Login to cPanel"
    Write-Host "  2. Go to 'Setup Node.js App'"
    Write-Host "  3. Click 'Restart' on your application"
    Write-Host "  4. Visit your website!"
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "❌ DEPLOYMENT FAILED" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please check the error messages above" -ForegroundColor Yellow
    exit 1
}
