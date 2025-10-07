#!/bin/bash
set -e

echo "Installing dependencies..."
npm ci

echo "Building Angular library..."
npm run build:release

echo "Setting up static files..."
cp landing.html dist/index.html
cp dist/_redirects dist/_redirects

echo "Build complete!"
ls -la dist/