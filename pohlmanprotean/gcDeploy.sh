#!/bin/bash

# Check if the project name is provided as an argument
if [ -z "$1" ]; then
  echo "Usage: sh gcDeploy.sh <gcprojectname>"
  exit 1
fi

# Set the project name from the first argument
gcproject=$1

# Build the Docker image
echo "Building Docker image..."
docker build -t gcr.io/$gcproject/$gcproject-image:latest .
if [ $? -ne 0 ]; then
  echo "Docker build failed."
  exit 1
fi
echo "Docker image built successfully."

# Push the Docker image to the Google Container Registry
echo "Pushing Docker image to Google Container Registry..."
docker push gcr.io/$gcproject/$gcproject-image:latest
if [ $? -ne 0 ]; then
  echo "Docker push failed."
  exit 1
fi
echo "Docker image pushed successfully."

# Deploy the image to Google Cloud Run
echo "Deploying to Google Cloud Run..."
gcloud run deploy $gcproject --image gcr.io/$gcproject/$gcproject-image:latest --platform managed --region europe-west1 --allow-unauthenticated
if [ $? -ne 0 ]; then
  echo "Cloud Run deployment failed."
  exit 1
fi
echo "Deployment successful."
