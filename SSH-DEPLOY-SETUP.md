# 🚀 SSH Auto-Deploy Setup Guide

Panduan lengkap untuk setup **One-Click Deploy** dari local ke hosting DomaiNesia menggunakan SSH.

---

## 📋 Prerequisites

- ✅ Windows dengan Git Bash atau PowerShell
- ✅ Akun hosting DomaiNesia dengan SSH access
- ✅ Project sudah di-push ke GitHub

---

## 🔑 STEP 1: Generate SSH Key (Di Local)

### A. Cek SSH Key yang Ada

Buka **Git Bash** atau **PowerShell** dan jalankan:

```bash
ls ~/.ssh/
```

**Jika belum ada key (file `id_rsa` atau `id_ed25519`)**, buat baru:

### B. Generate SSH Key Baru

```bash
# Generate SSH key (recommended: Ed25519)
ssh-keygen -t ed25519 -C "ourastudios@hosting"

# Atau jika sistem tidak support Ed25519, pakai RSA:
ssh-keygen -t rsa -b 4096 -C "ourastudios@hosting"
```

**Saat ditanya:**
- `Enter file in which to save the key`: **Tekan Enter** (default location)
- `Enter passphrase`: **Tekan Enter** (no passphrase untuk auto-deploy)
- `Enter same passphrase again`: **Tekan Enter**

**Output:**
```
Your identification has been saved in C:\Users\YourName\.ssh\id_ed25519
Your public key has been saved in C:\Users\YourName\.ssh\id_ed25519.pub
```

### C. Copy Public Key

```bash
# Windows PowerShell:
cat ~/.ssh/id_ed25519.pub | clip

# Atau Git Bash:
cat ~/.ssh/id_ed25519.pub
```

**Public key akan tercopy ke clipboard** atau ditampilkan di terminal. Contoh:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJqfXXXXXXXXXXXXXXXXXXXX ourastudios@hosting
```

**SIMPAN KEY INI** - akan dipakai di langkah berikutnya!

---

## 🌐 STEP 2: Add SSH Key ke Hosting DomaiNesia

### A. Login ke cPanel DomaiNesia

1. Buka browser: `https://yourdomain.com/cpanel` atau dari client area DomaiNesia
2. Login dengan username & password cPanel Anda

### B. Import SSH Public Key

1. Di cPanel, cari **"SSH Access"** atau **"Manage SSH Keys"**
2. Klik **"Manage SSH Keys"**

#### Option 1: Import Key (Recommended)

3. Klik tab **"Import Key"**
4. Fill in the form:
   - **Key Name:** `oura-deploy-key` (atau nama lain yang mudah diingat)
   - **Paste the public key:** Paste key yang sudah di-copy tadi
   - **Private Key:** *Kosongkan* (kita tidak upload private key)
5. Klik **"Import"**

#### Option 2: Generate di cPanel (Alternative)

3. Klik **"Generate a New Key"**
4. Fill in:
   - **Key Name:** `oura-deploy-key`
   - **Key Type:** `ed25519` atau `rsa`
   - **Key Size:** 4096 (jika RSA)
5. Klik **"Generate Key"**
6. **Download Private Key** dan simpan ke `C:\Users\YourName\.ssh\oura-deploy-key`

### C. Authorize the Key

1. Kembali ke **"Manage SSH Keys"**
2. Di bagian **"Public Keys"**, cari key yang baru dibuat
3. Klik **"Manage"** → **"Authorize"**
4. Konfirmasi **"Yes, authorize this key"**

**Key sekarang sudah aktif!** ✅

---

## 🔧 STEP 3: Konfigurasi SSH di Local

### A. Cek Informasi SSH dari DomaiNesia

**Informasi yang dibutuhkan:**

1. **SSH Username:** Biasanya sama dengan cPanel username (contoh: `ourastud`)
2. **SSH Host:** Domain Anda atau IP server (contoh: `yourdomain.com` atau `123.45.67.89`)
3. **SSH Port:** DomaiNesia biasanya pakai port **21098** atau custom port

**Cara cek:**
- cPanel → **SSH Access** → Lihat **"Server Information"**
- Atau hubungi support DomaiNesia untuk info SSH

### B. Test SSH Connection

Buka **Git Bash** atau **PowerShell**:

```bash
# Ganti dengan info hosting Anda
ssh -p 21098 ourastud@yourdomain.com

# Atau jika pakai default port 22:
ssh ourastud@yourdomain.com
```

**Jika berhasil:**
- Pertama kali akan muncul: `Are you sure you want to continue connecting?` → Ketik **yes**
- Anda akan masuk ke terminal hosting
- Ketik `exit` untuk keluar

**Jika gagal:**
- Cek username, host, dan port sudah benar
- Pastikan SSH key sudah ter-authorize di cPanel
- Hubungi support DomaiNesia

### C. Setup SSH Config (Optional - Bikin Lebih Mudah)

Edit file SSH config:

```bash
# Windows PowerShell:
notepad ~/.ssh/config

# Atau Git Bash:
nano ~/.ssh/config
```

Tambahkan konfigurasi ini:

```
# Oura Studios Hosting
Host oura-hosting
    HostName yourdomain.com
    User ourastud
    Port 21098
    IdentityFile ~/.ssh/id_ed25519
    ServerAliveInterval 60
    ServerAliveCountMax 3
```

**Ganti:**
- `yourdomain.com` → Domain atau IP hosting Anda
- `ourastud` → SSH username Anda
- `21098` → SSH port Anda
- `id_ed25519` → Nama SSH key Anda

**Sekarang Anda bisa connect dengan mudah:**

```bash
ssh oura-hosting
```

---

## ⚙️ STEP 4: Setup Deploy Script

### A. Edit Deploy Script Configuration

Buka file **`deploy-to-hosting.sh`** atau **`deploy-to-hosting.ps1`**:

```bash
# Di baris paling atas, ubah konfigurasi ini:

# Bash Script (deploy-to-hosting.sh)
SSH_USER="ourastud"           # Ganti dengan SSH username Anda
SSH_HOST="yourdomain.com"     # Ganti dengan domain/IP Anda
SSH_PORT="21098"              # Ganti dengan SSH port Anda
APP_PATH="/home1/ourastud/app"  # Path aplikasi di hosting
```

**Untuk PowerShell Script (deploy-to-hosting.ps1):**

```powershell
$SSH_USER = "ourastud"
$SSH_HOST = "yourdomain.com"
$SSH_PORT = "21098"
$APP_PATH = "/home1/ourastud/app"
```

**Simpan file!**

### B. Test Deploy Script

**Jika pakai Git Bash:**

```bash
npm run deploy
```

**Jika pakai PowerShell:**

```powershell
npm run deploy:ps
```

**Script akan:**
1. ✅ Commit changes (jika ada)
2. ✅ Push ke GitHub
3. ✅ SSH ke hosting
4. ✅ Pull latest code
5. ✅ Install dependencies
6. ✅ Build Next.js
7. ✅ Selesai!

---

## 🎯 CARA PAKAI (Setelah Setup Selesai)

### Deploy Website dalam 1 Command!

```bash
# Git Bash (Recommended):
npm run deploy

# PowerShell (Alternative):
npm run deploy:ps
```

**That's it!** Script akan auto:
1. Git push ke GitHub
2. Deploy ke hosting
3. Build aplikasi
4. Website langsung update! 🚀

---

## 🔄 Workflow Sehari-hari

### Cara Kerja Deploy:

```bash
# 1. Edit code di local
code .

# 2. Test local
npm run dev

# 3. Deploy ke hosting (1 command!)
npm run deploy

# 4. Restart aplikasi di cPanel (optional)
# Buka cPanel → Setup Node.js App → Restart

# 5. Visit website dan verify!
```

---

## 🐛 Troubleshooting

### Error: "Permission denied (publickey)"

**Masalah:** SSH key tidak ter-authorize

**Solusi:**
1. Cek SSH key sudah di-authorize di cPanel?
2. Test: `ssh -p 21098 ourastud@yourdomain.com`
3. Jika masih gagal, re-generate dan re-import SSH key

---

### Error: "Host key verification failed"

**Masalah:** Host belum ada di known_hosts

**Solusi:**

```bash
# Manual add host
ssh-keyscan -p 21098 -H yourdomain.com >> ~/.ssh/known_hosts

# Atau connect manual sekali:
ssh -p 21098 ourastud@yourdomain.com
# Ketik 'yes' saat ditanya
```

---

### Error: "bash: deploy-to-hosting.sh: command not found"

**Masalah:** Script tidak executable atau path salah

**Solusi:**

```bash
# Make script executable (Git Bash):
chmod +x deploy-to-hosting.sh

# Run directly:
bash deploy-to-hosting.sh
```

---

### Error: "npm run build failed"

**Masalah:** Build error di hosting

**Solusi:**

```bash
# SSH ke hosting
ssh -p 21098 ourastud@yourdomain.com

# Navigate to app
cd /home1/ourastud/app

# Check logs
npm run build

# Fix error yang muncul
```

---

### Deploy Script Terlalu Lama

**Masalah:** `npm install` sangat lambat

**Solusi:**
1. Gunakan `npm ci` instead (sudah di script)
2. Pastikan `node_modules` di `.gitignore`
3. Jangan push `node_modules` ke GitHub

---

## 📊 Monitoring

### Check Deployment Status

**Via SSH:**

```bash
ssh -p 21098 ourastud@yourdomain.com

# Check app status
cd /home1/ourastud/app
pm2 status

# Check logs
tail -f logs/app.log
```

**Via cPanel:**
- Setup Node.js App → Check status (Running/Stopped)
- View application logs

---

## 🔐 Security Best Practices

1. ✅ **NEVER commit private SSH key** ke GitHub
2. ✅ SSH keys ada di `.gitignore`
3. ✅ Gunakan SSH key dengan passphrase untuk production
4. ✅ Rotate SSH keys secara berkala (setiap 6-12 bulan)
5. ✅ Monitor SSH access logs di cPanel
6. ✅ Gunakan 2FA untuk cPanel login

---

## 📞 Need Help?

**Jika masih ada masalah:**

1. Screenshot error message
2. Copy output dari deploy script
3. Check SSH connection: `ssh -v -p 21098 ourastud@yourdomain.com`
4. Contact:
   - DomaiNesia Support (untuk SSH issues)
   - Development team (untuk deploy script issues)

---

## ✅ Setup Checklist

Pastikan semua sudah done:

- [ ] SSH key generated di local
- [ ] SSH public key uploaded ke cPanel
- [ ] SSH key authorized di cPanel
- [ ] SSH connection tested (bisa connect via SSH)
- [ ] Deploy script configured (username, host, port)
- [ ] Test deploy script berhasil
- [ ] Website bisa diakses setelah deploy

**Jika semua ✅, setup selesai!** 🎉

---

**Last Updated:** November 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅
