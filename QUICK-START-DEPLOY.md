# 🚀 Quick Start - One-Click Deploy

Deploy website dari local ke hosting dalam **1 command**!

---

## ⚡ TL;DR - Super Quick Setup

### 1️⃣ Generate SSH Key (1x saja)

```bash
ssh-keygen -t ed25519 -C "oura-hosting"
# Tekan Enter 3x (default settings)
```

### 2️⃣ Copy Public Key

```bash
cat ~/.ssh/id_ed25519.pub
# Copy output-nya
```

### 3️⃣ Add ke cPanel

1. Login cPanel → **SSH Access** → **Manage SSH Keys**
2. **Import Key** → Paste public key → **Import**
3. Klik **Manage** → **Authorize**

### 4️⃣ Dapatkan Info SSH dari DomaiNesia

**Yang dibutuhkan:**
- SSH Username (contoh: `ourastud`)
- SSH Host (contoh: `yourdomain.com`)
- SSH Port (biasanya: `21098`)

**Cara cek:** cPanel → SSH Access → lihat "Server Information"

### 5️⃣ Edit Deploy Script

Buka file: **`deploy-to-hosting.sh`** (atau `.ps1` untuk PowerShell)

**Ubah 3 baris ini:**

```bash
SSH_USER="ourastud"           # ← Ganti dengan username Anda
SSH_HOST="yourdomain.com"     # ← Ganti dengan domain Anda
SSH_PORT="21098"              # ← Ganti dengan port SSH Anda
```

### 6️⃣ Test SSH Connection

```bash
ssh -p 21098 ourastud@yourdomain.com
# Ketik 'yes' jika ditanya
# Jika berhasil login, ketik 'exit'
```

### 7️⃣ DEPLOY! 🚀

```bash
npm run deploy
```

**DONE!** Website langsung update di hosting!

---

## 📝 Workflow Sehari-hari

Setelah setup selesai, deploy jadi super simple:

```bash
# 1. Edit code
code .

# 2. Test di local
npm run dev

# 3. Deploy ke hosting (1 command!)
npm run deploy

# 4. Website langsung update! 🎉
```

---

## 🔧 Commands

### Deploy Commands

```bash
# Git Bash (Recommended)
npm run deploy

# PowerShell (Alternative)
npm run deploy:ps
```

### SSH Commands

```bash
# Connect ke hosting
ssh -p 21098 ourastud@yourdomain.com

# Check app status
cd /home1/ourastud/app
ls -la .next/  # Cek build folder

# View logs
tail -f logs/app.log
```

---

## ❓ Troubleshooting Cepat

### "Permission denied (publickey)"

**Fix:**
1. Pastikan SSH key sudah di-authorize di cPanel
2. Test: `ssh -p 21098 ourastud@yourdomain.com`

### "Host key verification failed"

**Fix:**

```bash
ssh-keyscan -p 21098 -H yourdomain.com >> ~/.ssh/known_hosts
```

### Build Failed

**Fix:**

```bash
# SSH ke hosting
ssh -p 21098 ourastud@yourdomain.com
cd /home1/ourastud/app
npm run build
# Lihat error dan fix
```

---

## 📚 Dokumentasi Lengkap

Untuk setup detail dan troubleshooting lengkap, baca:

- **`SSH-DEPLOY-SETUP.md`** - Setup lengkap SSH & deploy script
- **`CPANEL-NODEJS-CONFIG.md`** - Konfigurasi Node.js app di cPanel
- **`DEPLOYMENT.md`** - Dokumentasi deployment general

---

## ✅ Quick Checklist

Setup sudah benar jika:

- [ ] Bisa SSH ke hosting: `ssh -p 21098 ourastud@yourdomain.com`
- [ ] Deploy script configured (username, host, port sudah diubah)
- [ ] `npm run deploy` jalan tanpa error
- [ ] Website bisa diakses setelah deploy

**Semua ✅? Setup selesai!** 🎉

---

## 🆘 Butuh Bantuan?

1. Baca **`SSH-DEPLOY-SETUP.md`** untuk setup lengkap
2. Screenshot error dan kirim ke support
3. Test SSH connection: `ssh -v -p 21098 ourastud@yourdomain.com`

---

**Happy Deploying! 🚀**
