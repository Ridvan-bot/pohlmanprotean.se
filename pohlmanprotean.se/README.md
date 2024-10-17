This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, build and run the development server:

```bash
npm run build
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on in Citrix Cloud

To deploy this project in Citrix Cloud, you can use the cgDeploy.sh script located in the root directory of this project. Follow these steps:

Ensure that you have a project set up in Google Cloud.

Go to the Google Cloud Console and create a new project.
Ensure the appropriate permissions are set for the user who will deploy the project (including permission to delete resources).


```bash
bash cgDeploy.sh <projectname>

```
Replace <projectname> with the actual name of your Google Cloud project.
