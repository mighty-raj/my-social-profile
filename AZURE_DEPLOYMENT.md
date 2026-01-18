# Azure App Service Deployment Setup

Follow these steps to deploy your React app to Azure App Service:

## Prerequisites
- Azure account (create free at https://azure.microsoft.com/free/)
- GitHub account with your repository
- Git installed and repository pushed to GitHub

## Step 1: Create Azure App Service

1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource" → Search for "App Service"
3. Click "App Service" → Click "Create"

### Configuration:
- **Resource Group**: Create new or select existing (e.g., "my-social-profile-rg")
- **Name**: Unique name for your app (e.g., "my-social-profile-raj")
- **Publish**: Select "Code"
- **Runtime stack**: Select "Node 20 LTS"
- **Operating System**: Linux
- **App Service Plan**: Create new, select "Free F1" tier
- **Region**: Select closest to you

4. Click "Review + create" → Click "Create"
5. Wait for deployment to complete (1-2 minutes)

## Step 2: Configure Deployment from GitHub

1. After deployment completes, go to your App Service
2. In left sidebar, click "Deployment Center"
3. Under "Source", select "GitHub"
4. Click "Authorize" and sign in to GitHub
5. Select your repository and branch (main/master)
6. For "Build provider", select "GitHub Actions"
7. Click "Save"

## Step 3: Verify Deployment

1. Azure will create GitHub Actions workflow automatically
2. Check your repository's "Actions" tab to see the build
3. Once complete, your app is live at: `https://<your-app-name>.azurewebsites.net`

## Step 4: Test Your Live App

- Open the URL in your browser
- Verify all features work (navigation, social links, etc.)
- Test on mobile to ensure responsive design

## Custom Domain (Optional)

1. In App Service → "Custom domains"
2. Click "Add custom domain"
3. Enter your domain and follow DNS configuration instructions
4. Add SSL certificate (free managed certificate available)

## Environment Variables (If Needed)

In App Service → "Configuration" → "Application settings":
- Add new variables as needed
- Prefix with `VITE_` to access in React (e.g., `import.meta.env.VITE_API_URL`)

## Troubleshooting

If deployment fails:
1. Check GitHub Actions logs for build errors
2. Verify package.json build script is correct
3. Check App Service logs: App Service → "Log stream"
4. Ensure all dependencies are in package.json (not node_modules)

## Next Steps

After successful deployment:
1. Set up GitHub Actions CI/CD workflow (will be automatic)
2. Make changes locally and push to GitHub
3. Deployment will automatically trigger and update your live site
