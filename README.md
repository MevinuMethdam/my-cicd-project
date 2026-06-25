# 🚀 GateEase API - Zero-Downtime CI/CD Architecture

## 📌 Overview
This repository demonstrates a production-grade CI/CD pipeline built for the **GateEase API**. It implements a **True Zero-Downtime (Blue-Green) Deployment** architecture. The pipeline fully automates the continuous integration and deployment of Docker containers to an AWS EC2 instance, ensuring that not a single user request is dropped during system updates.

## 🛠️ Tech Stack & Infrastructure
* **CI/CD Automation:** GitHub Actions (with a Self-Hosted Runner)
* **Containerization:** Docker & Docker Hub
* **Cloud Environment:** AWS EC2 (Ubuntu Linux)
* **Reverse Proxy & Load Balancing:** Nginx
* **Backend Application:** Node.js

## ✨ Key Features & Engineering Highlights

1. **Automated Docker Workflows:** 
   Code changes pushed to the `main` branch automatically trigger a secure build of a new Docker image, which is tagged and pushed to Docker Hub using GitHub secrets.

2. **Persistent Self-Hosted Runner:** 
   The GitHub Actions Runner is configured as a persistent `systemd` background service on the AWS server, ensuring high availability even after server reboots.

3. **True Blue-Green Deployment (The Magic):** 
   Instead of stopping the existing container and experiencing downtime, this pipeline uses a sophisticated Bash script and Nginx to achieve zero downtime:
   * **State Detection:** The script reads the active Nginx configuration to determine if the current live traffic is on port `3000` or `3001`.
   * **Background Spin-up:** The new Docker container is launched on the idle port.
   * **Health Delay:** A designated wait time (`sleep 10`) ensures the new container is fully initialized and ready to accept requests.
   * **Seamless Traffic Switch:** The script dynamically rewrites the Nginx configuration to point to the new port and gracefully reloads Nginx.
   * **Cleanup:** The outdated container is safely forcefully removed to free up system resources.

## 🏗️ Architecture Flow
1. Developer pushes code to `github.com/IT24102783/my-cicd-project`.
2. GitHub Actions authenticates and builds the Docker image.
3. The self-hosted runner pulls the latest image directly into the AWS EC2 instance.
4. Nginx acts as the gatekeeper, seamlessly routing live traffic from the old architecture to the newly deployed version.

## 👨‍💻 Author
**Mevinu Methdam**  
*Information Systems Engineering (ISE) Undergraduate*
