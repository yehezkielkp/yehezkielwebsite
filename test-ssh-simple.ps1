# Simple SSH Connection Test Script
# Auto-test SSH connection ke hosting DomaiNesia

Write-Host "=========================================="
Write-Host "SSH Connection Test - Oura Studios"
Write-Host "=========================================="
Write-Host ""

# Configuration
$SSH_USER = "ourastud"
$HOSTS = @(
    "dipa.domainesia.com",
    "192.53.172.176"
)
$PORTS = @(21098, 22)

Write-Host "Testing Configuration:"
Write-Host "  Username: $SSH_USER"
Write-Host "  Hosts: $($HOSTS -join ', ')"
Write-Host "  Ports: $($PORTS -join ', ')"
Write-Host ""
Write-Host "Starting tests (may take 1-2 minutes)..."
Write-Host ""

$workingConfig = $null

foreach ($host in $HOSTS) {
    foreach ($port in $PORTS) {
        $testName = "$SSH_USER@${host}:${port}"
        Write-Host "Testing: $testName ... " -NoNewline
        
        try {
            # Test SSH connection with timeout
            $result = ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no -o BatchMode=yes -p $port "$SSH_USER@$host" "echo SUCCESS" 2>&1
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "SUCCESS!" -ForegroundColor Green
                $workingConfig = @{
                    User = $SSH_USER
                    Host = $host
                    Port = $port
                }
                break
            }
            elseif ($result -match "Permission denied") {
                Write-Host "AUTH REQUIRED (password/key needed)" -ForegroundColor Yellow
                if ($null -eq $workingConfig) {
                    $workingConfig = @{
                        User = $SSH_USER
                        Host = $host
                        Port = $port
                        AuthRequired = $true
                    }
                }
            }
            else {
                Write-Host "FAILED" -ForegroundColor Red
            }
        }
        catch {
            Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    if ($workingConfig -and !$workingConfig.AuthRequired) {
        break
    }
}

Write-Host ""
Write-Host "=========================================="
Write-Host "Test Results"
Write-Host "=========================================="
Write-Host ""

if ($workingConfig) {
    Write-Host "WORKING CONNECTION FOUND!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Recommended Configuration:"
    Write-Host ""
    Write-Host "SSH_USER=`"$($workingConfig.User)`""
    Write-Host "SSH_HOST=`"$($workingConfig.Host)`""
    Write-Host "SSH_PORT=`"$($workingConfig.Port)`""
    Write-Host ""
    Write-Host "Test manually:"
    Write-Host "ssh -p $($workingConfig.Port) $($workingConfig.User)@$($workingConfig.Host)"
    Write-Host ""
    
    if ($workingConfig.AuthRequired) {
        Write-Host "NOTE: You will need to enter your cPanel password" -ForegroundColor Yellow
        Write-Host "      or ensure your SSH key is properly authorized" -ForegroundColor Yellow
        Write-Host ""
    }
    
    # Save to file
    $config = @"
# SSH Configuration for Deploy Script
# Auto-generated

SSH_USER="$($workingConfig.User)"
SSH_HOST="$($workingConfig.Host)"
SSH_PORT="$($workingConfig.Port)"
APP_PATH="/home1/$($workingConfig.User)/app"

# Test command:
# ssh -p $($workingConfig.Port) $($workingConfig.User)@$($workingConfig.Host)
"@
    
    $config | Out-File -FilePath "ssh-config.txt" -Encoding UTF8
    Write-Host "Configuration saved to: ssh-config.txt" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "Next Steps:"
    Write-Host "1. Test the SSH connection manually using the command above"
    Write-Host "2. If successful, copy the config to deploy-to-hosting.sh"
    Write-Host "3. Run: npm run deploy"
    
} else {
    Write-Host "NO WORKING CONNECTIONS FOUND" -ForegroundColor Red
    Write-Host ""
    Write-Host "Possible issues:"
    Write-Host "- SSH is not enabled on your hosting account"
    Write-Host "- Firewall is blocking SSH connections"
    Write-Host "- Wrong username or hostname"
    Write-Host ""
    Write-Host "Next steps:"
    Write-Host "1. Contact DomaiNesia support"
    Write-Host "2. Ask for SSH access details (username, host, port)"
    Write-Host "3. Verify SSH is enabled for your package"
}

Write-Host ""
Write-Host "=========================================="
Write-Host "Test completed!"
Write-Host "=========================================="
