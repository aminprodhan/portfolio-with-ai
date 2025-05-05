#!/bin/bash

# Simple deployment script for the portfolio website

# Function to display help message
show_help() {
  echo "Usage: ./deploy.sh [option]"
  echo "Options:"
  echo "  -p, --production    Deploy in production mode (default)"
  echo "  -d, --development   Deploy in development mode"
  echo "  -n, --nginx         Deploy with Nginx for improved performance"
  echo "  -s, --stop          Stop running containers"
  echo "  -h, --help          Show this help message"
}

# Default mode is production
MODE="production"

# Kill any process using port 5000 to prevent conflicts
kill_port_process() {
  PORT=$1
  echo "Checking if port $PORT is in use..."
  if lsof -i:$PORT -t >/dev/null; then
    echo "Port $PORT is in use. Attempting to free it..."
    lsof -ti:$PORT | xargs kill -9
    echo "Port $PORT has been freed."
  else
    echo "Port $PORT is available."
  fi
}

# Parse command line arguments
if [ $# -gt 0 ]; then
  case "$1" in
    -p|--production)
      MODE="production"
      ;;
    -d|--development)
      MODE="development"
      ;;
    -n|--nginx)
      MODE="nginx"
      ;;
    -s|--stop)
      echo "Stopping all running containers..."
      docker-compose down 2>/dev/null
      docker-compose -f docker-compose.dev.yml down 2>/dev/null
      docker-compose -f docker-compose.nginx.yml down 2>/dev/null
      echo "All containers stopped."
      exit 0
      ;;
    -h|--help)
      show_help
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      show_help
      exit 1
      ;;
  esac
fi

# Free the ports before deployment
kill_port_process 5000
if [ "$MODE" = "nginx" ]; then
  kill_port_process 80
fi

# Stop any running containers first
echo "Stopping any running containers..."
docker-compose down 2>/dev/null
docker-compose -f docker-compose.dev.yml down 2>/dev/null
docker-compose -f docker-compose.nginx.yml down 2>/dev/null

# Deploy based on the selected mode
if [ "$MODE" = "production" ]; then
  echo "Deploying in production mode..."
  docker-compose up -d --build
  echo "Application deployed in production mode. Access at http://localhost:5000"
elif [ "$MODE" = "nginx" ]; then
  echo "Deploying with Nginx..."
  docker-compose -f docker-compose.nginx.yml up -d --build
  echo "Application deployed with Nginx. Access at http://localhost:80 or just http://localhost"
else
  echo "Deploying in development mode..."
  docker-compose -f docker-compose.dev.yml up -d --build
  echo "Application deployed in development mode. Access at http://localhost:5000"
fi