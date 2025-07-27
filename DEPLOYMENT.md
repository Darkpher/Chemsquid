# ChemSquid Deployment Guide

This guide will help you deploy your ChemSquid game to the web for science fair use.

## 🚀 GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository: `chemsquid-game`
4. Make it **Public** (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Upload Files

1. **Option A: Web Interface**
   - Click "uploading an existing file"
   - Drag and drop all ChemSquid files
   - Commit changes

2. **Option B: Git Commands**
   ```bash
   git clone https://github.com/yourusername/chemsquid-game.git
   cd chemsquid-game
   # Copy all ChemSquid files here
   git add .
   git commit -m "Initial ChemSquid game"
   git push origin main
   ```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/(root)** folder
6. Click **Save**

### Step 4: Access Your Game

Your game will be available at:
`https://yourusername.github.io/chemsquid-game`

## 🌐 Netlify Deployment

### Option 1: Drag & Drop (Easiest)

1. Go to [Netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Drag your entire ChemSquid folder to the deploy area
4. Wait for deployment (usually 30 seconds)
5. Your site is live! Netlify provides a random URL

### Option 2: Connect to GitHub

1. Go to [Netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Deploy settings:
   - **Build command**: Leave empty
   - **Publish directory**: Leave as `/` (root)
5. Click "Deploy site"

## 📱 QR Code Generation

### Step 1: Get Your Game URL

After deployment, you'll have a URL like:
- GitHub Pages: `https://yourusername.github.io/chemsquid-game`
- Netlify: `https://random-name.netlify.app`

### Step 2: Generate QR Code

**Free QR Code Generators:**
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QRCode Monkey](https://www.qrcode-monkey.com/)
- [GoQR.me](https://goqr.me/)

**Steps:**
1. Enter your game URL
2. Choose size (recommend 300x300px minimum)
3. Download as PNG or SVG
4. Print in high quality

### Step 3: Display at Science Fair

- **Large Print**: Print QR code at least 8x8 inches
- **Clear Instructions**: Add text like "Scan to play ChemSquid!"
- **Multiple Copies**: Have several QR codes around your display
- **Backup Plan**: Have the URL written down as backup

## 🎪 Science Fair Setup

### Physical Elements

1. **Display Board**
   - Game title and description
   - QR code prominently displayed
   - Instructions for visitors
   - Chemistry facts or periodic table

2. **Interactive Elements**
   - **Ball Pit**: Real ball pit with element symbols
   - **Candy Containers**: Physical containers with element names
   - **Glass Bridge**: Cardboard panels with A/B choices
   - **Player Numbers**: Green tracksuits or numbered badges

3. **Technology Setup**
   - **Tablets/Phones**: Set up several devices for multiple players
   - **WiFi**: Ensure good internet connection
   - **Backup**: Have offline version ready

### Visitor Experience

1. **Welcome**: Explain the game concept
2. **Scan**: Help visitors scan QR code
3. **Play**: Let them experience the game
4. **Discuss**: Talk about chemistry concepts
5. **Record**: Track scores and engagement

## 🔧 Custom Domain (Optional)

### GitHub Pages Custom Domain

1. In repository Settings → Pages
2. Add custom domain (e.g., `chemsquid.yourdomain.com`)
3. Update DNS records with your domain provider
4. Wait for DNS propagation (up to 24 hours)

### Netlify Custom Domain

1. In Netlify dashboard → Site settings → Domain management
2. Add custom domain
3. Update DNS records
4. Enable HTTPS (automatic with Netlify)

## 📊 Analytics (Optional)

### Google Analytics

1. Create Google Analytics account
2. Add tracking code to `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Netlify Analytics

- Available with Netlify Pro plan
- Automatic visitor tracking
- No code changes needed

## 🐛 Troubleshooting

### Common Issues

**Game Not Loading**
- Check file paths (should be relative)
- Verify all files uploaded
- Check browser console for errors

**QR Code Not Working**
- Test URL directly in browser
- Ensure URL is accessible
- Check QR code quality and size

**Mobile Issues**
- Test on different devices
- Check viewport meta tag
- Verify touch event handling

### Performance Optimization

1. **Compress Images**: Use tools like TinyPNG
2. **Optimize Audio**: Keep file sizes under 1MB each
3. **Minify Code**: Use online minifiers for production
4. **CDN**: Consider using CDN for faster loading

## 📞 Support

If you encounter issues:

1. **Check Documentation**: Review README.md
2. **Browser Console**: Look for error messages
3. **Test Locally**: Ensure game works before deployment
4. **Community Help**: GitHub Issues or Stack Overflow

---

**Your ChemSquid game is now ready for the science fair! 🎮🧪** 