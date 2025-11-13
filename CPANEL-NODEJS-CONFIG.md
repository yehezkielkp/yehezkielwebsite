# 🔧 cPanel Node.js App Configuration

## ✅ Konfigurasi Yang BENAR untuk DomaiNesia

### 📝 Node.js Application Settings

| Setting | Value | Keterangan |
|---------|-------|------------|
| **Node.js version** | `20.x` atau terbaru | Pilih versi terbaru yang tersedia |
| **Application mode** | `Production` | PENTING: Set ke Production |
| **Application root** | `/home1/ourastud/app` | Path ABSOLUTE, bukan relative |
| **Application URL** | `https://yourdomain.com` | Domain/subdomain Anda |
| **Application startup file** | `server.js` | File yang akan dijalankan |
| **Passenger log file** | `/home1/ourastud/logs/passenger.log` | Path lengkap dengan filename |

### 🔐 Environment Variables

Tambahkan environment variables berikut:

| Name | Value | Keterangan |
|------|-------|------------|
| `NODE_ENV` | `production` | Set production mode |
| `PORT` | `40001` | Port yang sudah dikonfigurasi |
| `HOSTNAME` | `localhost` | Hostname untuk server |

**Cara menambahkan:**
1. Klik **"Add variable"**
2. Masukkan Name dan Value
3. Klik **Save**

---

## 🚨 MASALAH di Konfigurasi Lama

### ❌ Yang SALAH:

```
Application root: app
```
**Masalah:** Ini relative path, cPanel butuh absolute path

**Solusi:** `/home1/ourastud/app`

---

```
Application startup file: npm start
```
**Masalah:** cPanel butuh file .js, bukan npm command

**Solusi:** `server.js`

---

```
Passenger log file: /home1/ourastud/
```
**Masalah:** Ini hanya direktori, tidak ada filename

**Solusi:** `/home1/ourastud/logs/passenger.log`

---

## 📋 Langkah-Langkah Setup

### 1. Upload File `server.js`

File `server.js` sudah dibuat. Pastikan ter-upload ke hosting:

```bash
# Via Git
git add server.js package.json
git commit -m "Add custom server for cPanel hosting"
git push origin main

# Lalu di cPanel Git, pull latest changes
```

### 2. Update Node.js App Configuration

**Login ke cPanel** → **Setup Node.js App** → **Edit** aplikasi Anda:

#### A. Basic Settings
- **Node.js version:** `20.x` (pilih terbaru)
- **Application mode:** `Production`

#### B. Application Settings
- **Application root:** `/home1/ourastud/app`
- **Application URL:** `https://yourdomain.com`
- **Application startup file:** `server.js`
- **Passenger log file:** `/home1/ourastud/logs/passenger.log`

#### C. Environment Variables
Klik **"Add variable"** dan tambahkan:

1. Variable 1:
   - Name: `NODE_ENV`
   - Value: `production`

2. Variable 2:
   - Name: `PORT`
   - Value: `40001`

3. Variable 3:
   - Name: `HOSTNAME`
   - Value: `localhost`

### 3. Build Application

**Pilih salah satu:**

#### Option A: Via cPanel Git (Recommended)
1. **Git Version Control** → **Manage** repository
2. Klik **"Pull or Deploy"**
3. Tunggu proses selesai (akan auto-build)

#### Option B: Via SSH
```bash
ssh username@yourdomain.com
cd /home1/ourastud/app
npm install --production
npm run build
```

### 4. Restart Application

Kembali ke **Setup Node.js App** → Klik **"Restart"**

### 5. Verify

1. Klik **"Open"** di Application URL
2. Website seharusnya jalan normal! 🎉
3. Check logs jika ada error:
   ```bash
   tail -f /home1/ourastud/logs/passenger.log
   ```

---

## 🔍 Troubleshooting

### Error: "Cannot find module 'next'"

**Solusi:**
```bash
cd /home1/ourastud/app
npm install --production
```

### Error: "ENOENT: no such file or directory, open '.next/prerender-manifest.json'"

**Solusi:**
```bash
cd /home1/ourastud/app
npm run build
```

### Error: "Address already in use"

**Masalah:** Port sudah dipakai

**Solusi:** 
1. Ubah environment variable `PORT` ke port lain (misal: `40002`)
2. Restart aplikasi

### Website tidak bisa diakses

**Checklist:**
- [ ] Aplikasi sudah di-restart?
- [ ] File `.next` folder sudah ada?
- [ ] Environment variables sudah benar?
- [ ] Domain sudah pointing ke cPanel?
- [ ] SSL certificate sudah installed?

**Check logs:**
```bash
tail -50 /home1/ourastud/logs/passenger.log
```

---

## 📊 Monitoring

### Check Application Status

**Via cPanel:**
- Setup Node.js App → Lihat status (Running/Stopped)

**Via SSH:**
```bash
ps aux | grep node | grep server.js
```

### View Real-time Logs

```bash
tail -f /home1/ourastud/logs/passenger.log
```

### Check Memory Usage

```bash
ps aux | grep node
```

---

## 🚀 Deployment Workflow

### Setiap kali update website:

```bash
# 1. Di komputer lokal
git add .
git commit -m "Update website"
git push origin main

# 2. Di cPanel
# Buka Git Version Control → Pull or Deploy
# Otomatis akan:
# - Pull latest code
# - npm install
# - npm run build
# - Create .next folder

# 3. Restart aplikasi
# Setup Node.js App → Restart

# 4. Verify
# Buka website dan test
```

---

## 📞 Support

Jika masih ada masalah:

1. **Screenshot** konfigurasi Node.js App di cPanel
2. **Copy** error dari passenger log
3. Contact DomaiNesia support atau saya

---

**Last Updated:** November 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅
