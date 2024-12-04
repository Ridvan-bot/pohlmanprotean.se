# PohlmanProtean.se

![Build Status](https://github.com/Ridvan-bot/pohlmanprotean.se/actions/workflows/deploy.yml/badge.svg)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/Ridvan-bot/pohlmanprotean.se?label=version&sort=semver)
![Last Commit](https://img.shields.io/github/last-commit/Ridvan-bot/pohlmanprotean.se)
![GitHub issues](https://img.shields.io/github/issues/Ridvan-bot/pohlmanprotean.se)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Ridvan-bot/pohlmanprotean.se)

**PohlmanProtean** is a TypeScript-based Next.js web application hosted on Google Cloud. This project supports both production and development environments, with automated deployments triggered via GitHub workflows.

## Table of Contents
- [Project Overview](#project-overview)
- [Environments](#environments)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Project Locally](#running-the-project-locally)
- [Deployment](#deployment)
- [DNS Registration](#dns-registration)
- [Manual Deployment](#manual-deployment)
- [Release](#release)
- [Contributing](#contributing)
- [Fork the repository](#fork-the-repository)
- [License](#license)

## Project Overview

This project is a TypeScript Next.js application for the **PohlmanProtean** website. The primary URL for production is [pohlmanprotean.se](https://pohlmanprotean.se), with the development environment accessible at [dev.pohlmanprotean.se](https://dev.pohlmanprotean.se).

## Environments

The project is hosted in Google Cloud with continuous deployment handled by GitHub workflows.

| Environment   | URL                                      | Description            |
| ------------- | ---------------------------------------- | ---------------------- |
| Production    | [pohlmanprotean.se](https://pohlmanprotean.se)         | Live production site   |
| Development   | [dev.pohlmanprotean.se](https://dev.pohlmanprotean.se) | Staging for new changes |

### Deployment Workflow

- **Production**: Automatically deployed from the `main` branch to the production URL.
- **Development**: Automatically deployed from the `dev` branch to the development URL.

The GitHub workflow file responsible for deployments is located at `.github/workflows/deploy.yml`.

## Technologies Used

- **Next.js** - React framework for server-side rendering and static site generation.
- **TypeScript** - Superset of JavaScript with static typing.
- **Google Cloud** - Hosting and cloud services.
- **GitHub Workflows** - For CI/CD and automatic deployments.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:Ridvan-bot/website.git
   cd website/pohlmanprotean.se/
   npm install
   npm run dev
   ```
The project should now be running at http://localhost:3000

## Setup Google Cloud Infrastructure

To setup everything you need in Google Cloud please visit the shared workflow repo and read the README.
https://github.com/Ridvan-bot/workflows/blob/main/README.md 

You will find the most relevant information at Prep GCLOUD Workflow

## Code Validation

This project uses GitHub Actions to validate code quality before deployment. The validation process includes running ESLint and unit tests to ensure code quality and functionality.

### Code Quality Validation Workflow

The code quality validation workflow is defined in [`.github/workflows/validate.yml`](.github/workflows/validate.yml). This workflow is triggered on every push to the `main` and `dev` branches by workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

The validation workflow performs the following steps:
1. **ESLint**: Lints the codebase using ESLint to ensure code quality and consistency.
2. **Unit Tests**: Runs unit tests to verify the functionality of the code.

### Configuration

The validation workflow can be configured using the following inputs:
- `branches`: The branch to run the shared workflow on (default: `main`).
- `eslint-enable`: Enable or disable ESLint (default: `false`).
- `eslint-command`: The command to run ESLint (default: `npx eslint --config eslint.config.mjs '**/*.{js,ts,tsx}' || exit 1`).
- `unit-test-enable`: Enable or disable unit tests (default: `true`).
- `unit-test-command`: The command to run unit tests (default: `npm run test`).

### Secrets

The validation workflow requires the following secrets:
- `GH_TOKEN`: GitHub token for authentication.


For more details, refer to the [validation workflow file](.github/workflows/validate.yml).

The Google Cloud run requiers following secrets:
- `DEV_GCP_SA_KEY`: Development Project Google Cloud Json Key.
- `MAIN_GCP_SA_KEY`: Production Project Google Cloud Json Key.

This project also use Google Cloud Secret Manager. Add your local secretes here. 


The Semantic Release has an option to post release info in Slack Channel:
- `SLACK_WEBHOOK`: Key to pass relese content to Slack Channel.


## Deployment 
Automatic Deployment with GitHub Workflows
This project uses GitHub Actions to handle automatic deployments:

Production: Any push to the main branch triggers a deployment to pohlmanprotean.se.
Development: Any push to the dev branch triggers a deployment to dev.pohlmanprotean.se.
The deployment process is defined in .github/workflows/deploy.yml.

Make sure you create a project in Google Gloud Run before you try to commit any code to a repo.
Once you pushed the code, and if it failes, make sure the service account in Google Cloud has all the permission it needs.
These are the Permissions:

Viewer, Cloud Run Admin, Cloud Build Editor, Service Account User, Storage Admin, Artifact Registry Writer, Registry Administrator.

If you are new to Google Cloud Run, and you are using the free trail, make sure you enable billing. 

### DNS Registration

1. Visit Google Cloud
2. Navigate to your Project
3. Search for Custom Domains (App Engine)
4. Create Application
5. Choose Region
6. Select your Service Account
7. Click Next
8. Once it completes, search for custom daomains again.
9. Add a custom domain
10. Type the DNS name
11. Click verify
12. Use TXT and add that entries in you Domain providers record as TXT
13. Wait for 1h and try to verify
14. When the verification works, link you domain to your google cloud run
15. You will get a list of A records and AAAA recrods by google and CNAME
16. Add those records in you Domain providers DNS settings
17. You have to remove the old record that you had poiting towards verification URL
18. Go to cloud Run
19. Mark the Service that you want to mapp
20. A menu above the service will be visible
21. Click on Domains Mapping
22. Click on Add Mapping
23. Add the values in your DNS settings at the Domain vendors website, if you haven’t already

## Manual Deployment
In cases where a manual deployment is needed, you can trigger the workflow directly from the GitHub Actions tab on your repository.


## Release 

### Versioning & Changelog
This project follows a standardized release and versioning process using Semantic Release to ensure consistent commit messages, making it easier to track changes and automate versioning.

### Changelog Generation: 
The changelog is automatically generated and maintained using standard-version. With each release, a new version is generated, and an entry is added to CHANGELOG.md.

### How to Create a New Release

Make sure all commit messages follow the Semantic Release format.

### What will happen:

A new changelog entry in CHANGELOG.md.
A new Git tag and GitHub release.
Deploy the latest version to the appropriate environment.
Post a release message in Slack (Optional)

## Contributing

We welcome contributions to PohlmanProtean! To contribute please contact us via the webpage.

To contribute: Fork the repository.
Create a new branch with a descriptive name (feature/your-feature-name).
Make your changes and commit them with clear, concise messages.
Push your branch and create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
