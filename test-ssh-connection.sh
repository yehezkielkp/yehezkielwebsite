#!/bin/bash

###############################################################################
# SSH Connection Test Script - Bash Version
# Test berbagai konfigurasi SSH ke hosting DomaiNesia
###############################################################################

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
GRAY='\033[0;90m'
NC='\033[0m' # No Color

echo -e "${CYAN}==========================================${NC}"
echo -e "${CYAN}🔍 SSH Connection Test - Oura Studios${NC}"
echo -e "${CYAN}==========================================${NC}"
echo ""

# Configuration
SSH_USER="ourastud"
HOSTS=("dipa.domainesia.com" "192.53.172.176" "srv1.domainesia.com" "srv2.domainesia.com")
PORTS=(21098 22 2222)

# Test results
SUCCESSFUL_HOST=""
SUCCESSFUL_PORT=""
TEST_RESULTS=()

echo -e "${YELLOW}📋 Testing Configuration:${NC}"
echo "   Username: $SSH_USER"
echo "   Hosts to test: ${#HOSTS[@]} hosts"
echo "   Ports to test: ${PORTS[*]}"
echo ""
echo -e "${YELLOW}⏱️  Starting tests (this may take 1-2 minutes)...${NC}"
echo ""

# Function to test SSH connection
test_ssh_connection() {
    local user=$1
    local host=$2
    local port=$3
    
    echo -ne "Testing: ${user}@${host}:${port} ... "
    
    # Test with timeout
    output=$(ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no -o BatchMode=yes -p $port "${user}@${host}" "echo 'SUCCESS'" 2>&1)
    exit_code=$?
    
    if [ $exit_code -eq 0 ] && [[ $output == *"SUCCESS"* ]]; then
        echo -e "${GREEN}✅ SUCCESS!${NC}"
        SUCCESSFUL_HOST=$host
        SUCCESSFUL_PORT=$port
        return 0
    elif [[ $output == *"Permission denied"* ]]; then
        echo -e "${YELLOW}⚠️  Auth required (key/password)${NC}"
        if [ -z "$SUCCESSFUL_HOST" ]; then
            SUCCESSFUL_HOST=$host
            SUCCESSFUL_PORT=$port
        fi
        return 2
    elif [[ $output == *"Connection refused"* ]]; then
        echo -e "${RED}❌ Connection refused${NC}"
        return 1
    elif [[ $output == *"Connection timed out"* ]] || [[ $output == *"Could not resolve"* ]]; then
        echo -e "${RED}❌ Timeout/Host unreachable${NC}"
        return 1
    else
        echo -e "${GRAY}❓ Unknown response${NC}"
        return 1
    fi
}

# Run tests
total_tests=$((${#HOSTS[@]} * ${#PORTS[@]}))
current_test=0
success_count=0
auth_required_count=0
failed_count=0

for host in "${HOSTS[@]}"; do
    for port in "${PORTS[@]}"; do
        ((current_test++))
        echo -ne "${CYAN}[$current_test/$total_tests]${NC} "
        
        test_ssh_connection "$SSH_USER" "$host" "$port"
        result=$?
        
        if [ $result -eq 0 ]; then
            ((success_count++))
        elif [ $result -eq 2 ]; then
            ((auth_required_count++))
        else
            ((failed_count++))
        fi
    done
    echo ""
done

# Display results
echo ""
echo -e "${CYAN}==========================================${NC}"
echo -e "${CYAN}📊 Test Results Summary${NC}"
echo -e "${CYAN}==========================================${NC}"
echo ""

echo "Total Tests: $total_tests"
echo -e "${GREEN}✅ Successful: $success_count${NC}"
echo -e "${YELLOW}⚠️  Auth Required: $auth_required_count${NC}"
echo -e "${RED}❌ Failed: $failed_count${NC}"
echo ""

# Show results
if [ -n "$SUCCESSFUL_HOST" ]; then
    echo -e "${GREEN}==========================================${NC}"
    echo -e "${GREEN}✅ WORKING CONNECTION FOUND!${NC}"
    echo -e "${GREEN}==========================================${NC}"
    echo ""
    
    echo -e "${YELLOW}💡 RECOMMENDED CONFIGURATION${NC}"
    echo -e "${YELLOW}==========================================${NC}"
    echo ""
    echo "Use these values in your deploy script:"
    echo ""
    echo -e "${CYAN}SSH_USER=\"$SSH_USER\"${NC}"
    echo -e "${CYAN}SSH_HOST=\"$SUCCESSFUL_HOST\"${NC}"
    echo -e "${CYAN}SSH_PORT=\"$SUCCESSFUL_PORT\"${NC}"
    echo ""
    
    echo "Test this connection manually:"
    echo -e "${GREEN}ssh -p $SUCCESSFUL_PORT $SSH_USER@$SUCCESSFUL_HOST${NC}"
    echo ""
    
    # Save to file
    cat > ssh-config.txt << EOF
# SSH Configuration for Deploy Script
# Auto-generated from test-ssh-connection.sh

SSH_USER="$SSH_USER"
SSH_HOST="$SUCCESSFUL_HOST"
SSH_PORT="$SUCCESSFUL_PORT"
APP_PATH="/home1/$SSH_USER/app"

# Test command:
# ssh -p $SUCCESSFUL_PORT $SSH_USER@$SUCCESSFUL_HOST

# Generated: $(date)
EOF
    
    echo -e "${GREEN}✅ Configuration saved to: ssh-config.txt${NC}"
    echo ""
    
else
    echo -e "${RED}==========================================${NC}"
    echo -e "${RED}❌ NO WORKING CONNECTIONS FOUND${NC}"
    echo -e "${RED}==========================================${NC}"
    echo ""
    echo -e "${YELLOW}Possible issues:${NC}"
    echo "1. SSH is not enabled on your hosting account"
    echo "2. Firewall is blocking SSH connections"
    echo "3. Wrong username or hostname"
    echo "4. SSH port is different from tested ports"
    echo ""
    echo -e "${YELLOW}Next steps:${NC}"
    echo "1. Contact DomaiNesia support and ask for SSH access details"
    echo "2. Verify SSH is enabled for your hosting package"
    echo "3. Ask for: SSH Username, SSH Host, SSH Port"
    echo ""
fi

echo -e "${CYAN}==========================================${NC}"
echo -e "${CYAN}✅ Test completed!${NC}"
echo -e "${CYAN}==========================================${NC}"
