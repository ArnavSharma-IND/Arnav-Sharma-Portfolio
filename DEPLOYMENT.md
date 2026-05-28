# Deployment Guide - Arnav Sharma Portfolio

This guide provides detailed instructions for deploying your ultra-premium portfolio website to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [x] All dependencies installed (`pnpm install`)
- [x] Project builds successfully (`pnpm build`)
- [x] All personal information updated in components
- [x] Project links updated with actual GitHub/demo URLs
- [x] Contact form email configured

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Fastest & Easiest)

Vercel provides the best performance for React applications with automatic deployments.

#### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   ```bash
   # Install Vercel CLI (optional)
   pnpm add -g vercel
   
   # Deploy from command line
   vercel
   ```
   
   OR
   
   - Click "New Project" on Vercel dashboard
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration

3. **Configure Build Settings** (Usually auto-detected)
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes at `your-project.vercel.app`

5. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS settings as instructed

**Automatic Deployments:** Every push to your main branch automatically deploys!

---

### Option 2: Netlify

Netlify is another excellent platform with great features and free hosting.

#### Steps:

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Deploy via Drag & Drop** (Quick Method)
   ```bash
   # Build the project
   pnpm build
   ```
   - Drag and drop the `dist` folder to Netlify dashboard
   - Site goes live immediately!

3. **Deploy via Git** (Recommended for continuous deployment)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `pnpm build`
     - Publish directory: `dist`
   - Click "Deploy site"

4. **Configure**
   - Add custom domain in Site Settings
   - Enable HTTPS (automatic)
   - Set up continuous deployment

**Deploy Command via CLI:**
```bash
# Install Netlify CLI
pnpm add -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:

1. **Install gh-pages**
   ```bash
   pnpm add -D gh-pages
   ```

2. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Add this line
     // ... rest of config
   })
   ```

3. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "pnpm build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   pnpm deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Folder: `/` (root)
   - Save

6. **Access Your Site**
   - `https://your-username.github.io/your-repo-name/`

---

### Option 4: Cloudflare Pages

Fast global CDN with generous free tier.

#### Steps:

1. **Create Cloudflare Account**
   - Go to [cloudflare.com](https://cloudflare.com)
   - Sign up and navigate to Pages

2. **Connect Repository**
   - Click "Create a project"
   - Connect your GitHub account
   - Select your repository

3. **Configure Build**
   - Framework preset: `Vite`
   - Build command: `pnpm build`
   - Build output directory: `dist`
   - Root directory: `/`

4. **Deploy**
   - Click "Save and Deploy"
   - Site goes live at `your-project.pages.dev`

5. **Custom Domain**
   - Add custom domain in project settings
   - Update DNS records

---

### Option 5: Firebase Hosting

Google's hosting platform with excellent performance.

#### Steps:

1. **Install Firebase CLI**
   ```bash
   pnpm add -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Project**
   ```bash
   firebase init hosting
   ```
   
   Configure:
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub integration: `Optional`

4. **Build and Deploy**
   ```bash
   pnpm build
   firebase deploy
   ```

5. **Access Your Site**
   - `https://your-project.web.app`
   - `https://your-project.firebaseapp.com`

---

### Option 6: AWS Amplify

AWS's hosting solution with global CDN.

#### Steps:

1. **Create AWS Account**
   - Go to [aws.amazon.com](https://aws.amazon.com)
   - Navigate to AWS Amplify

2. **New App**
   - Click "New app" → "Host web app"
   - Connect GitHub repository

3. **Configure Build**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - pnpm install
       build:
         commands:
           - pnpm build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Deploy**
   - Save and deploy
   - Live at `https://main.d123.amplifyapp.com`

---

## 🔧 Build Optimization Tips

### 1. Reduce Bundle Size

```bash
# Analyze bundle
pnpm add -D rollup-plugin-visualizer

# In vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

plugins: [
  // ... other plugins
  visualizer({ open: true })
]
```

### 2. Enable Compression

Most platforms enable this automatically, but verify:
- Gzip compression
- Brotli compression

### 3. Image Optimization

- Use WebP format for images
- Compress images before upload
- Lazy load images

### 4. Code Splitting

Vite handles this automatically for better performance.

---

## 🌐 Custom Domain Setup

### General Steps:

1. **Purchase Domain** (if you don't have one)
   - Namecheap, Google Domains, GoDaddy, etc.

2. **Configure DNS**
   
   For **Vercel/Netlify**:
   ```
   Type: A
   Name: @
   Value: [Platform IP - provided by platform]
   
   Type: CNAME
   Name: www
   Value: [your-subdomain.platform.app]
   ```

3. **SSL Certificate**
   - Most platforms auto-provision SSL
   - Vercel, Netlify, Cloudflare all include free SSL

4. **Verify**
   - DNS propagation can take 24-48 hours
   - Use [whatsmydns.net](https://whatsmydns.net) to check

---

## 📊 Performance Monitoring

### Recommended Tools:

1. **Google Lighthouse**
   - Run in Chrome DevTools
   - Aim for 90+ scores

2. **Web Vitals**
   - Install: `pnpm add web-vitals`
   - Monitor LCP, FID, CLS

3. **Analytics**
   - Google Analytics
   - Vercel Analytics
   - Plausible (privacy-focused)

---

## 🔒 Environment Variables

If you add API keys or secrets:

### Vercel:
```bash
# Via CLI
vercel env add VITE_API_KEY

# Or in dashboard
Settings → Environment Variables
```

### Netlify:
```bash
# Via CLI
netlify env:set VITE_API_KEY "your-key"

# Or in dashboard
Site settings → Environment variables
```

**Important:** Prefix with `VITE_` for Vite to expose to client.

---

## 🚨 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Try building locally
pnpm build
```

### 404 Errors on Routes

For SPA routing, create `public/_redirects` (Netlify) or `vercel.json` (Vercel):

**Netlify** (`public/_redirects`):
```
/*    /index.html   200
```

**Vercel** (`vercel.json`):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Slow Load Times

- Enable caching headers
- Optimize images
- Remove unused dependencies
- Enable compression

---

## 📞 Support

Deployment issues? Check:
- Platform documentation
- Stack Overflow
- GitHub Issues for specific packages

---

## 🎉 Congratulations!

Your ultra-premium portfolio is now live! Share it with:
- LinkedIn profile
- GitHub profile
- Email signature
- Resume

**Live URL Examples:**
- `arnavsharma.vercel.app`
- `arnav-portfolio.netlify.app`
- `arnavsharma.com` (custom domain)

---

Made with ❤️ by Arnav Sharma
