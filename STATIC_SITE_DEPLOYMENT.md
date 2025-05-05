# Deploying Your Portfolio Website as a Static Site on Vercel

This guide will walk you through the steps to deploy your professional portfolio website as a **purely static site** on Vercel, without the server component.

## Prerequisites

- A [Vercel](https://vercel.com) account (you can sign up for free)
- [Git](https://git-scm.com/) installed on your computer
- The portfolio website project on your GitHub, GitLab, or Bitbucket account

## Step 1: Prepare Your Repository for Static Deployment

For a static site deployment (no server), we'll use the simplified configuration:

1. Rename `vercel.static.json` to `vercel.json`:

```bash
mv vercel.static.json vercel.json
```

2. You can safely remove these files as they're only needed for server-based deployments:
   - `api/index.js`
   - `vercel-build.sh`

## Step 2: Connect to Vercel

1. Go to [Vercel](https://vercel.com) and sign in with your account
2. Click on "Add New..." → "Project"
3. Connect to your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your portfolio website repository
5. Vercel will automatically detect the project as a Vite project

## Step 3: Configure the Deployment

1. **Project Name**: Enter a name for your project (this will be used in the URL)
2. **Framework Preset**: Make sure "Vite" is selected
3. **Build and Output Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist/client`
   - Install Command: `npm install`
4. **Environment Variables**: None needed for a purely static site

## Step 4: Deploy

1. Click "Deploy"
2. Vercel will clone your repository, build your project, and deploy it to their global CDN
3. After deployment completes, you'll be redirected to the project dashboard

## Step 5: Configure Custom Domain (Optional)

If you want to use a custom domain instead of the default `.vercel.app` domain:

1. In your project dashboard, go to "Settings" → "Domains"
2. Click "Add" and enter your domain name
3. Follow the instructions to verify your domain ownership

## Step 6: Verify Deployment

1. Visit your deployed site at the provided URL (e.g., `your-project.vercel.app`)
2. Test all functionality to make sure everything works as expected

## Benefits of Static Site Deployment

Deploying as a static site has several advantages:

- **Faster Performance**: Static sites load extremely quickly
- **Better Security**: No server-side code means fewer security vulnerabilities
- **Lower Cost**: Static hosting is often free or very inexpensive
- **Global CDN**: Vercel serves your content from edge locations worldwide
- **Simpler Deployment**: No need to manage server configurations

## Limitations of Static Site Deployment

Be aware of these limitations when going fully static:

- No server-side processing or APIs (unless you use Vercel Edge Functions or serverless functions separately)
- If you need dynamic functionality, you'll have to use client-side API calls to external services

## Need Help?

If you need assistance with your Vercel deployment, you can:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Visit the [Vercel Support](https://vercel.com/support) page
3. Join the [Vercel Community](https://vercel.com/community) for help from other developers