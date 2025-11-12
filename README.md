# Oura Studios Website

Official website for Oura Studios - Creative Digital Agency based in Jakarta Selatan, Indonesia.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router + Pages Router)
- **Language:** TypeScript
- **Styling:** SCSS + Bootstrap 5
- **Animations:** GSAP 3 (ScrollTrigger, ScrollSmoother, SplitText)
- **UI Components:** React Bootstrap, Slick Carousel
- **Form Handling:** React Hook Form + Yup validation

## 📁 Project Structure

```
Oura Website/
├── src/
│   ├── app/                    # Next.js App Router (Primary routing)
│   ├── pages/                  # Page components (imported by App Router)
│   ├── components/             # Reusable React components
│   ├── data/                   # Static data (blog, team, menu)
│   ├── hooks/                  # Custom React hooks
│   ├── layouts/                # Layout components (Header, Footer)
│   ├── plugins/                # GSAP plugins
│   ├── types/                  # TypeScript type definitions
│   └── utils/                  # Utility functions & animations
├── public/
│   └── assets/
│       ├── img/                # Images (361 files)
│       ├── videos/             # Videos (6 files, ~35MB)
│       ├── fonts/              # Custom fonts
│       ├── css/                # Additional CSS
│       └── scss/               # SCSS source files
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies & scripts
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── deploy.sh                   # cPanel deployment script
└── .cpanel.yml                 # cPanel auto-deploy config
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager

### Installation

```bash
# Clone repository
git clone https://github.com/your-username/oura-studios-website.git
cd oura-studios-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌐 Production Deployment

### Option 1: cPanel with Git Auto-Deploy

1. **Create Git Repository in cPanel:**
   - Go to cPanel → Git Version Control
   - Create new repository
   - Set repository URL to your GitHub repo

2. **Configure Auto-Deploy:**
   - cPanel will automatically use `.cpanel.yml` for deployment
   - Update `.cpanel.yml` with your cPanel paths

3. **Setup Git Hook:**
   - Every `git push` to main branch will trigger auto-deployment
   - cPanel will run: `npm ci --production && npm run build`

4. **Node.js App Configuration:**
   - Go to cPanel → Setup Node.js App
   - Set Application Root
   - Set Application URL
   - Application Startup File: `node_modules/next/dist/bin/next`
   - Arguments: `start -p 3000`

### Option 2: Manual Deployment

```bash
# On your cPanel server via SSH:

# 1. Pull latest changes
git pull origin main

# 2. Install dependencies
npm ci --production

# 3. Build application
npm run build

# 4. Start application
npm start
```

### Option 3: Vercel (Recommended for Easy Setup)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

## 🔒 Security Features

- ✅ Security headers configured (X-Frame-Options, CSP, XSS Protection)
- ✅ No hardcoded credentials or API keys
- ✅ Environment variables properly ignored in git
- ✅ Input validation on forms
- ✅ HTTPS enforced via security headers
- ✅ No console.log in production code
- ✅ Proper CORS configuration

## 🎨 Customization

### Updating Content

- **Menu:** Edit `src/data/menu-data.ts`
- **Blog Posts:** Edit `src/data/blog-data.ts`
- **Team Members:** Edit `src/data/team-data.ts`
- **Social Links:** Edit `src/data/social-data.ts`

### Styling

- **SCSS Variables:** `public/assets/scss/utils/_variables.scss`
- **Colors:** `public/assets/scss/utils/_colors.scss`
- **Typography:** `public/assets/scss/utils/_typography.scss`

### Images & Videos

- **Images:** Place in `public/assets/img/`
- **Videos:** Place in `public/assets/videos/`
- **Logos:** `public/assets/img/logo/`

## 📊 Performance

### Build Output

- **Total Pages:** 33 static pages
- **First Load JS:** 87.6 KB - 264 KB (optimized)
- **Image Optimization:** Enabled (AVIF & WebP)
- **Compression:** Enabled (gzip/brotli)

### Asset Sizes

- Videos: ~35 MB (6 files)
- Images: 361 files (optimized)
- Total bundle: Optimized for production

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Kill process on port 3000
# Windows: 
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac:
lsof -ti:3000 | xargs kill -9
```

## 📝 Environment Variables

No environment variables required for basic operation.

Optional environment variables (create `.env.local`):

```env
# Production URL
NEXT_PUBLIC_APP_URL=https://ourastudios.com

# Google Analytics (optional)
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX

# Contact Form API (if integrated)
EMAIL_API_KEY=your-api-key
EMAIL_FROM=contact@ourastudios.com
```

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test locally
4. Create pull request

## 📄 License

© 2025 Oura Studios. All rights reserved.

## 📞 Support

For support, email: info@ourastudios.com

---

**Made with ❤️ by Oura Studios Team**
