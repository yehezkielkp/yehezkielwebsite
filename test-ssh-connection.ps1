# SSH Connection Test Script
# Test berbagai konfigurasi SSH ke hosting DomaiNesia

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "🔍 SSH Connection Test - Oura Studios" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Configuration
$SSH_USER = "ourastud"
$HOSTS = @(
    "dipa.domainesia.com",
    "192.53.172.176",
    "srv1.domainesia.com",
    "srv2.domainesia.com"
)
$PORTS = @(21098, 22, 2222)

# Test results
$successfulConnection = $null
$testResults = @()

Write-Host "📋 Testing Configuration:" -ForegroundColor Yellow
Write-Host "   Username: $SSH_USER"
Write-Host "   Hosts to test: $($HOSTS.Count) hosts"
Write-Host "   Ports to test: $($PORTS -join ', ')"
Write-Host ""
Write-Host "⏱️  Starting tests (this may take 1-2 minutes)..." -ForegroundColor Yellow
Write-Host ""

# Function to test SSH connection
function Test-SSHConnection {
    param (
        [string]$User,
        [string]$Host,
        [int]$Port
    )
    
    $testName = "${User}@${Host}:${Port}"
    Write-Host "Testing: $testName ... " -NoNewline
    
    try {
        # Test with timeout
        $output = ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no -o BatchMode=yes -p $Port "$User@$Host" "echo 'SUCCESS'" 2>&1
        
        if ($LASTEXITCODE -eq 0 -and $output -match "SUCCESS") {
            Write-Host "✅ SUCCESS!" -ForegroundColor Green
            return @{
                Success = $true
                User = $User
                Host = $Host
                Port = $Port
                Message = "Connection successful"
            }
        }
        elseif ($output -match "Permission denied") {
            Write-Host "⚠️  Auth required (key/password)" -ForegroundColor Yellow
            return @{
                Success = $false
                User = $User
                Host = $Host
                Port = $Port
                Message = "Connection OK but authentication failed (SSH key or password needed)"
                AuthRequired = $true
            }
        }
        elseif ($output -match "Connection refused") {
            Write-Host "❌ Connection refused" -ForegroundColor Red
            return @{
                Success = $false
                User = $User
                Host = $Host
                Port = $Port
                Message = "Connection refused - wrong port or SSH disabled"
            }
        }
        elseif ($output -match "Connection timed out" -or $output -match "Could not resolve") {
            Write-Host "❌ Timeout/Host unreachable" -ForegroundColor Red
            return @{
                Success = $false
                User = $User
                Host = $Host
                Port = $Port
                Message = "Connection timeout - wrong host or network issue"
            }
        }
        else {
            Write-Host "❓ Unknown response" -ForegroundColor Gray
            return @{
                Success = $false
                User = $User
                Host = $Host
                Port = $Port
                Message = "Unknown response: $output"
            }
        }
    }
    catch {
        Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
        return @{
            Success = $false
            User = $User
            Host = $Host
            Port = $Port
            Message = "Error: $($_.Exception.Message)"
        }
    }
}

# Run tests
$totalTests = $HOSTS.Count * $PORTS.Count
$currentTest = 0

foreach ($host in $HOSTS) {
    foreach ($port in $PORTS) {
        $currentTest++
        Write-Host "[$currentTest/$totalTests] " -NoNewline -ForegroundColor Cyan
        
        $result = Test-SSHConnection -User $SSH_USER -Host $host -Port $port
        $testResults += $result
        
        # If successful, save it
        if ($result.Success -or $result.AuthRequired) {
            $successfulConnection = $result
        }
    }
    Write-Host ""
}

# Display results
Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "📊 Test Results Summary" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

$successCount = ($testResults | Where-Object { $_.Success -eq $true }).Count
$authRequiredCount = ($testResults | Where-Object { $_.AuthRequired -eq $true }).Count
$failedCount = $testResults.Count - $successCount - $authRequiredCount

Write-Host "Total Tests: $($testResults.Count)" -ForegroundColor White
Write-Host "✅ Successful: $successCount" -ForegroundColor Green
Write-Host "⚠️  Auth Required: $authRequiredCount" -ForegroundColor Yellow
Write-Host "❌ Failed: $failedCount" -ForegroundColor Red
Write-Host ""

# Show successful or auth-required connections
$workingConnections = $testResults | Where-Object { $_.Success -eq $true -or $_.AuthRequired -eq $true }

if ($workingConnections.Count -gt 0) {
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host "✅ WORKING CONNECTIONS FOUND!" -ForegroundColor Green
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host ""
    
    foreach ($conn in $workingConnections) {
        Write-Host "Connection: " -NoNewline
        Write-Host "$($conn.User)@$($conn.Host):$($conn.Port)" -ForegroundColor Cyan
        Write-Host "Status: $($conn.Message)" -ForegroundColor Yellow
        Write-Host ""
    }
    
    # Recommend the best connection
    $recommended = $workingConnections[0]
    Write-Host "==========================================" -ForegroundColor Yellow
    Write-Host "💡 RECOMMENDED CONFIGURATION" -ForegroundColor Yellow
    Write-Host "==========================================" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Use these values in your deploy script:" -ForegroundColor White
    Write-Host ""
    Write-Host "SSH_USER=`"$($recommended.User)`"" -ForegroundColor Cyan
    Write-Host "SSH_HOST=`"$($recommended.Host)`"" -ForegroundColor Cyan
    Write-Host "SSH_PORT=`"$($recommended.Port)`"" -ForegroundColor Cyan
    Write-Host ""
    
    # Test command
    Write-Host "Test this connection manually:" -ForegroundColor White
    Write-Host "ssh -p $($recommended.Port) $($recommended.User)@$($recommended.Host)" -ForegroundColor Green
    Write-Host ""
    
    if ($recommended.AuthRequired) {
        Write-Host "⚠️  NOTE: You'll need to enter your cPanel password when connecting" -ForegroundColor Yellow
        Write-Host "   or ensure your SSH key is properly authorized." -ForegroundColor Yellow
        Write-Host ""
    }
    
    # Save to file
    $configContent = @"
# SSH Configuration for Deploy Script
# Auto-generated from test-ssh-connection.ps1

SSH_USER="$($recommended.User)"
SSH_HOST="$($recommended.Host)"
SSH_PORT="$($recommended.Port)"
APP_PATH="/home1/$($recommended.User)/app"

# Test command:
# ssh -p $($recommended.Port) $($recommended.User)@$($recommended.Host)

# Generated: $(Get-Date)
"@
    
    $configContent | Out-File -FilePath "ssh-config.txt" -Encoding UTF8
    Write-Host "✅ Configuration saved to: ssh-config.txt" -ForegroundColor Green
    Write-Host ""
    
} else {
    Write-Host "==========================================" -ForegroundColor Red
    Write-Host "❌ NO WORKING CONNECTIONS FOUND" -ForegroundColor Red
    Write-Host "==========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Possible issues:" -ForegroundColor Yellow
    Write-Host "1. SSH is not enabled on your hosting account" -ForegroundColor White
    Write-Host "2. Firewall is blocking SSH connections" -ForegroundColor White
    Write-Host "3. Wrong username or hostname" -ForegroundColor White
    Write-Host "4. SSH port is different from tested ports" -ForegroundColor White
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Contact DomaiNesia support and ask for SSH access details" -ForegroundColor White
    Write-Host "2. Verify SSH is enabled for your hosting package" -ForegroundColor White
    Write-Host "3. Ask for: SSH Username, SSH Host, SSH Port" -ForegroundColor White
    Write-Host ""
}

# Detailed results
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "📝 Detailed Test Results" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

foreach ($result in $testResults) {
    $status = if ($result.Success) { "✅ SUCCESS" } 
              elseif ($result.AuthRequired) { "⚠️  AUTH REQUIRED" }
              else { "❌ FAILED" }
    
    $color = if ($result.Success) { "Green" }
             elseif ($result.AuthRequired) { "Yellow" }
             else { "Red" }
    
    Write-Host "$status - " -NoNewline -ForegroundColor $color
    Write-Host "$($result.User)@$($result.Host):$($result.Port)" -ForegroundColor White
    Write-Host "   Message: $($result.Message)" -ForegroundColor Gray
}

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "✅ Test completed!" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
