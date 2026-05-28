# Arnav Sharma - Portfolio Website

Ultra-premium futuristic 3D portfolio website with exceptional UI/UX, cinematic animations, and buttery smooth transitions.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue)

## 🚀 Features

- ✨ **Cinematic Animations** - Smooth Framer Motion animations throughout
- 🎨 **3D Graphics** - Interactive Three.js backgrounds with React Three Fiber
- 🌈 **Premium Design** - Glassmorphism UI with neon glow effects
- ⚡ **Blazing Fast** - Optimized performance with Vite
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎯 **Interactive** - Custom cursor, particle effects, and smooth scrolling
- 🔥 **Modern Stack** - Built with latest React, TypeScript, and Tailwind CSS v4

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Language**: TypeScript 5.4.5
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Framer Motion (motion 12.23.24) + GSAP 3.12.5
- **3D Graphics**: Three.js 0.164.1 + React Three Fiber 8.16.2 + Drei 9.105.4
- **Icons**: Lucide React
- **Fonts**: Inter, Orbitron, Rajdhani (Google Fonts)

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/ArnavSharma-IND/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Start development server**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
pnpm build
# or
npm run build
# or
yarn build
```

The optimized production build will be generated in the `dist` folder.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── App.tsx          # Main application component
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── About.tsx        # About section
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx # Custom animated cursor
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx         # Hero section with 3D background
│   │   ├── Loader.tsx       # Loading animation
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── ParticleBackground.tsx
│   │   ├── Projects.tsx
│   │   ├── Scene3D.tsx      # Three.js 3D scene
│   │   └── Skills.tsx
│   └── styles/
│       └── fonts.css        # Font imports
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.ts`:
```typescript
colors: {
  neon: {
    blue: '#00f0ff',
    purple: '#bf00ff',
    pink: '#ff006e',
    green: '#00ff88',
    yellow: '#ffea00',
  },
  // ... more colors
}
```

### Content
Update your personal information in the component files:
- **Hero.tsx** - Name, title, social links
- **About.tsx** - Professional summary, education
- **Skills.tsx** - Technical skills and proficiency levels
- **Projects.tsx** - Project details and links
- **Certifications.tsx** - Certifications and achievements
- **Contact.tsx** - Contact information

## 🌟 Key Features Breakdown

### 1. Animated Hero Section
- Massive visual impact with 3D animated background
- Typing animation for titles
- Floating particles and interactive elements
- Dynamic spotlight following cursor

### 2. Ultra Smooth Navigation
- Floating glass navbar
- Smooth scroll transitions
- Section reveal animations
- Active section indicators

### 3. Premium About Section
- Timeline animations
- Floating cards with motion effects
- Elegant typography

### 4. Advanced Skills Section
- Animated skill bars with shimmer effects
- Hover glow effects
- Interactive animations

### 5. Stunning Projects Section
- 3D project cards
- Tilt-on-hover effects
- Animated previews
- Smooth modal transitions

### 6. Interactive Contact Section
- Futuristic contact form
- Animated buttons
- Social icons with hover animations

### 7. Premium Effects
- Custom animated cursor
- Mouse trail effect
- Background particle system
- Animated gradients
- Parallax movement
- Loading screen animation

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚡ Performance

- Lazy loading for components
- Optimized animations with GPU acceleration
- Code splitting for better load times
- Image optimization
- Minimal bundle size

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
pnpm build

# Deploy dist folder to Netlify
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"predeploy": "pnpm build",
"deploy": "gh-pages -d dist"

# Deploy
pnpm deploy
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Arnav Sharma**
- GitHub: [@ArnavSharma-IND](https://github.com/ArnavSharma-IND)
- LinkedIn: [arnav-sharma-dev](https://www.linkedin.com/in/arnav-sharma-dev)
- Email: arnav.sharma9051@gmail.com

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- 3D Graphics powered by [Three.js](https://threejs.org/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

If you have any questions or need help, feel free to reach out:
- Email: arnav.sharma9051@gmail.com
- LinkedIn: [arnav-sharma-dev](https://www.linkedin.com/in/arnav-sharma-dev)

---

Made with ❤️ by Arnav Sharma
