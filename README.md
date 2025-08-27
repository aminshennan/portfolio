# 🚀 Amin Shennan - Data Scientist Portfolio

A modern, responsive portfolio website showcasing my journey as a Data Scientist, built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio features smooth animations, dark/light theme support, multilingual capabilities, and a comprehensive showcase of my skills, projects, and experience.

## 🏆 Project Status


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)



## ✨ Features

### 🎨 Design & User Experience
- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Multilingual Support**: English and Arabic language support with RTL layout
- **Smooth Scrolling**: Enhanced navigation experience with smooth scroll behavior
- **Floating Navigation**: Sticky navigation bar with scroll progress indicator
- **Mobile Menu**: Optimized mobile navigation experience

### 🛠️ Technical Features
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **TypeScript**: Full TypeScript support for type safety
- **Component-Based**: Modular component architecture
- **Error Boundaries**: Robust error handling and fallback UI
- **SEO Optimized**: Proper meta tags, sitemap generation, and structured data
- **Analytics Ready**: Google Analytics integration
- **Progressive Web App**: PWA capabilities with manifest and service worker
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### 📱 Interactive Components
- **Animated Skill Bars**: Dynamic skill visualization with progress animations
- **Project Cards**: Expandable project showcase with detailed information
- **Experience Timeline**: Interactive timeline showing career progression
- **Volunteer Section**: Community involvement and contributions
- **Contact Form**: Functional contact form with validation
- **Keyboard Shortcuts**: Quick navigation using keyboard shortcuts
- **Cookie Consent**: GDPR compliant cookie consent management

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit

### UI Components
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Shadcn/ui**: Re-usable components built using Radix UI and Tailwind CSS
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Bundle Analyzer**: Analyze and optimize bundle size
- **Sitemap Generator**: Automatic sitemap generation

### Code Quality & Reviews
- **CodeRabbit**: AI-powered code review automation for enhanced code quality
- **TypeScript**: Compile-time type checking and error prevention
- **ESLint**: Comprehensive linting rules for code consistency
- **Prettier**: Automated code formatting for maintainability
- **Git Hooks**: Pre-commit quality checks and validation
- **Conventional Commits**: Structured commit messages for better project history

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aminshennan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint

# Type checking
npm run type-check

# Bundle analysis
npm run analyze

# Clean build artifacts
npm run clean

# Generate sitemap
npm run postbuild
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Main page sections
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature-specific components
├── contexts/              # React contexts
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── images/           # Image assets
│   ├── icons/            # Favicon and app icons
│   └── documents/        # PDFs and documents
├── styles/                # Additional stylesheets
└── types/                 # TypeScript type definitions
```

## 🎯 Key Sections

### 🏠 Hero Section
- Dynamic introduction with animated text
- Professional profile image
- Call-to-action buttons
- Particle background effects

### 👨‍💻 About Section
- Personal introduction
- Professional background
- Core values and approach
- Statistics and achievements

### 🛠️ Skills Section
- Technical skills with animated progress bars
- Soft skills showcase
- Categorized skill sets
- Interactive skill grid

### 💼 Projects Section
- Featured project showcase
- Expandable project cards
- Technology stack for each project
- Live demo and source code links

### 🏢 Experience Section
- Professional timeline
- Company details and achievements
- Role descriptions
- Skills utilized

### 🤝 Volunteer Section
- Community involvement
- Volunteer roles and contributions
- Impact and achievements

### 📧 Contact Section
- Contact information
- Social media links
- Contact form
- Location details

## 🌐 Deployment

This portfolio is optimized for deployment on various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project exports as a static site and can be deployed to any static hosting service.

## 🎨 Customization

### Updating Content
1. **Personal Information**: Update content in section components
2. **Skills**: Modify skill data in the SkillsSection component
3. **Projects**: Add/update projects in the ProjectsSection component
4. **Experience**: Update timeline data in ExperienceSection
5. **Styling**: Customize colors and fonts in `tailwind.config.ts`

### Adding New Languages
1. Create translation files in the contexts directory
2. Update the language context
3. Add language options to the language switcher

### Theme Customization
- Modify the theme configuration in `tailwind.config.ts`
- Update CSS variables in `globals.css`
- Customize component themes in the theme provider

## 📱 Performance Optimizations

- **Code Splitting**: Dynamic imports for non-critical components
- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Analysis**: Regular bundle size monitoring
- **Caching**: Optimized caching strategies
- **Compression**: Gzip compression for static assets

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## 🤝 Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Amin Shennan**
- **Email**: [aminshennan@gmail.com](mailto:aminshennan@gmail.com)
- **LinkedIn**: [Amin Shennan](https://linkedin.com/in/aminshennan)
- **Portfolio**: [https://aminshennan.vercel.app](https://aminshennan.vercel.app)
- **GitHub**: [https://github.com/aminshennan](https://github.com/aminshennan)

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio designs and best practices
- **UI Components**: Shadcn/ui and Radix UI for accessible components
- **Icons**: Lucide React for beautiful icons
- **Animations**: Framer Motion for smooth animations
- **Hosting**: Vercel for seamless deployment

---

⭐ **If you found this portfolio helpful, please consider giving it a star!**

🚀 **Ready to create your own portfolio? Fork this repository and make it your own!** 
