# My Social Profile

A modern, responsive React profile website built with Vite and deployed to Azure App Service.

## Features

- ✨ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern Dark Theme** - Cyberpunk-inspired design with cyan/blue accents and glowing effects
- 🧭 **Navigation Sidebar** - Hamburger menu with smooth slide-out sidebar navigation
- 🔗 **Anchor Links** - Quick jump to any section (About Me, Get in Touch)
- 🚀 **Fast Performance** - Built with Vite for optimal build speed and bundle size
- 📱 **Social Integration** - Direct links to email, LinkedIn, Twitter, and Instagram
- 💳 **Payment QR Code** - Display a QR code for easy payment/support options
- 📋 **Configuration-Driven** - Profile data stored in JSON config for easy updates
- 🚀 **Automated Deployment** - GitHub Actions CI/CD to Azure App Service

## Project Structure

```
my-social-profile/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Profile header with hamburger menu
│   │   ├── Navigation.jsx      # Navigation sidebar with anchor links
│   │   ├── About.jsx           # About section
│   │   ├── Contact.jsx         # Contact links
│   │   ├── PayMe.jsx           # Payment QR code section
│   │   └── Footer.jsx          # Footer
│   ├── styles/
│   │   ├── Header.module.css   # Header and menu styles
│   │   ├── Navigation.module.css # Sidebar navigation styles
│   │   ├── About.module.css    # About section styles
│   │   ├── Contact.module.css  # Contact links styles
│   │   ├── PayMe.module.css    # PayMe section styles
│   │   └── Footer.module.css   # Footer styles
│   ├── config/
│   │   └── profile.json        # Profile data configuration
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # App layout and grid styles
│   ├── index.css               # Global styles
│   └── main.jsx                # React entry point
├── public/                      # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── web.config                  # Azure SPA routing configuration
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- Azure account (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/my-social-profile.git
   cd my-social-profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`

4. **Make changes**
   - Edit components in `src/components/`
   - Edit styles in `src/styles/`
   - **Important**: Update the following with your actual information:
     - `Header.jsx`: Profile picture URL and name
     - `Contact.jsx`: Email, LinkedIn, Twitter, Instagram URLs
     - `PayMe.jsx`: QR code image URL
     - `Footer.jsx`: Copyright name

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build Locally

```bash
npm run preview
```

All profile data is stored in `src/config/profile.json`. Simply edit this file to update:

```json
{
  "name": "Your Name",
  "tagline": "Your Professional Tagline",
  "subtitle": "Your Subtitle",
  "profilePictureUrl": "/images/profile.jpg",
  "about": {
    "title": "About Me",
    "bio": ["Bio paragraph 1", "Bio paragraph 2", "Bio paragraph 3"]
  },
  "contacts": {
    "title": "Get in Touch",
    "items": [
      {
        "id": "email",
        "label": "Email",
        "icon": "📧",
        "link": "mailto:your-email@example.com"
      }
      // ... more contacts
    ]
  },
  "footer": {
    "copyrightName": "Your Name"
  }
}
```

### Navigation Sections

The navigation sidebar automatically links to sections with matching IDs:
- `#about` - Links to About Me section
- `#contact` - Links to Get in Touch section

To add new sections:
1. Add a new anchor ID to your section: `<section id="my-section">`
2. Add an entry to the `sections` array in `Navigation.jsx`

### Customize Styles

All styling uses CSS Modules for scoped styling. Key theme colors:
- **Primary Accent**: `#38bdf8` (cyan blue)
- **Bright Accent**: `#00ffff` (bright cyan)
- **Text Color**: `#a5f3fc` (light cyan)
- **Dark Background**: `rgba(30, 27, 75, 0.4)` (deep blue/purple)

Edit files in `src/styles/` to customize the appearance:

- `Header.module.css` - Header with menu button styling
- `Navigation.module.css` - Sidebar navigation styles and animations
- `About.module.css` - About section styles
- `Contact.module.css` - Contact buttons and links
- `Footer.module.css` - Footer styling and profile section
- `About.module.css` - About section
- `Contact.module.css` - Contact links
- `PayMe.module.css` - Payment QR code section
- `Footer.module.css` - Footer

## Deployment to Azure App Service

### Prerequisites

- Azure account with active subscription
- Azure CLI installed (optional)
- GitHub account with repository access

### Setup Steps

1. **Create Azure App Service (Free Tier)**
   - Go to Azure Portal
   - Create new "App Service"
   - Choose "Runtime stack": Node 20 LTS
   - Choose "Operating System": Linux (or Windows)
   - Choose "App Service Plan": Free (F1)

2. **Configure GitHub Actions Deployment**
   - In Azure Portal, go to your App Service
   - Navigate to "Deployment Center"
   - Select "GitHub"
   - Authorize GitHub and select your repository
   - Select "Vite" as the build preset (or Manual)
   - The workflow file will be generated or review `.github/workflows/deploy.yml`

3. **Alternative: Manual Setup with Publish Profile**
   - In App Service > "Overview", click "Get publish profile"
   - Save the XML file
   - In GitHub repository > Settings > Secrets and variables > Actions
   - Create new secret `AZURE_WEBAPP_PUBLISH_PROFILE` with the XML content
   - Push to main branch to trigger deployment

4. **Verify Deployment**
   - GitHub Actions will automatically build and deploy
   - Check GitHub Actions tab to see deployment progress
   - Once complete, access your site at: `https://<app-name>.azurewebsites.net`

### Custom Domain (Optional)

1. In Azure Portal > App Service > Custom domains
2. Add your domain (requires CNAME or A record configuration with your domain registrar)
3. Add SSL certificate (free managed certificate available)

### Environment Variables (If Needed Later)

Add environment variables in Azure Portal:
- App Service > Settings > Configuration > Application settings
- Add new application settings as needed
- Access in React code via `import.meta.env.VITE_*` (must be prefixed with `VITE_`)

## Future Enhancements

### Add FastAPI Backend

When ready to add backend functionality:

1. **Create separate FastAPI application**
   ```
   backend/
   ├── main.py
   ├── requirements.txt
   └── ...
   ```

2. **Update Contact Form**
   - Add form handling in React
   - Call FastAPI endpoint: `/api/contact`

3. **Deployment Options**
   - Option 1: Separate Azure App Service for FastAPI
   - Option 2: Use Azure Container Instances
   - Option 3: Use Azure Functions for serverless backend

### Recommended API Endpoints Structure

```
POST /api/contact
  - Request body: { name, email, message }
  - Response: { status, message }

GET /api/config
  - Get profile configuration from backend
  - Useful for updating profile without redeployment
```

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

Built with Vite for optimal performance:
- Lightning-fast HMR (Hot Module Replacement) during development
- Optimized production builds (~2x smaller than Create React App)
- Automatic code splitting

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
- Create an issue in GitHub repository
- Check GitHub Discussions for community help

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Azure App Service Documentation](https://learn.microsoft.com/azure/app-service/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [FastAPI Documentation](https://fastapi.tiangolo.com/) (for future backend)

---

**Happy coding! 🚀**
