# BrandMindz Production Deployment Guide

This guide details how to set up the **AWS EC2** instance, configure a secure reverse proxy with **Nginx** and **SSL (Let's Encrypt)**, and configure **GitLab CI/CD variables** to enable automated, zero-downtime, source-code-free deployments.

---

## Part 1: Provisioning the AWS EC2 Instance

### 1. Launch Instance
- **AMI**: Ubuntu Server 22.04 LTS (highly recommended for stability and packages).
- **Instance Type**: `t3.small` or `t3.medium` is recommended for Next.js (at least 2GB RAM is ideal for smooth operation, though `t2.micro` can work if optimized).
- **Key Pair**: Create or use an existing key pair (`.pem` file) and keep it secure. You will need the private key for GitLab CI/CD.

### 2. Configure Security Group
Ensure the instance's Security Group permits the following inbound traffic:
- **SSH (Port 22)**: Restrict to your IP address for security.
- **HTTP (Port 80)**: Open to `0.0.0.0/0` (anywhere).
- **HTTPS (Port 443)**: Open to `0.0.0.0/0` (anywhere).

---

## Part 2: Configuring the EC2 Server

SSH into your new EC2 instance:
```bash
ssh -i /path/to/your-key.pem ubuntu@YOUR_EC2_IP
```

### 1. Update and Upgrade System
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Install Docker
```bash
# Install Docker prerequisites
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Add Docker’s official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the stable repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt update && sudo apt install -y docker-ce docker-ce-cli containerd.io

# Enable and start Docker service
sudo systemctl enable docker
sudo systemctl start docker

# Add ubuntu user to docker group (to run docker commands without sudo)
sudo usermod -aG docker ubuntu
```
*Note: Run `newgrp docker` or log out and log back in for group changes to take effect.*

### 3. Install Nginx and Certbot
```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

---

## Part 3: Setting Up Nginx and SSL

### 1. Setup Nginx Configuration
Create a new configuration block for your domain:
```bash
sudo nano /etc/nginx/sites-available/brandmindz
```

Paste the following configuration (replace `yourdomain.com` with your actual domain):
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site configuration and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/brandmindz /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default # Remove default configuration if present
sudo nginx -t # Verify configuration syntax is correct
sudo systemctl restart nginx
```

### 2. Obtain SSL Certificate with Certbot
Run Certbot to request a Let's Encrypt certificate and automatically configure SSL redirection in Nginx:
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
- Follow the interactive prompts (enter email, agree to terms).
- Certbot will automatically issue certificates, update Nginx configs to listen on port 443 with SSL, and configure automated redirects from HTTP to HTTPS!
- Certbot automatically adds a systemd timer or cron job to handle certificate renewals. Test renewal with:
  ```bash
  sudo certbot renew --dry-run
  ```

---

## Part 4: Configuring GitLab CI/CD Variables

To enable the GitLab Runner to build, push, and deploy, you need to store critical parameters securely in GitLab.

1. Navigate to your GitLab project: **Settings** -> **CI/CD** -> **Variables**.
2. Click **Add variable** for each of the following:

| Key | Value Description | Flags |
| :--- | :--- | :--- |
| `SSH_PRIVATE_KEY` | Paste the exact contents of your EC2 `.pem` private key file (ensure there is a trailing newline). | **Masked** (or unselected if too short) |
| `EC2_IP` | The public IP address of your EC2 instance (e.g. `54.12.34.56`). | **Unmasked** |
| `EC2_USER` | The SSH user for your EC2 instance (e.g. `ubuntu`). | **Unmasked** |

---

## Part 5: Verification & Commands

### Monitoring Deployment Logs on EC2
Once the CI/CD pipeline runs and completes successfully, you can view the live output or check status using standard docker commands:
```bash
# View active containers
docker ps

# Check the real-time application logs
docker logs -f brandmindz-app

# Inspect memory or CPU usage
docker stats brandmindz-app
```

This deployment strategy keeps the EC2 server completely clear of build dependencies, source code, and secrets. All updates are seamlessly managed via Docker image updates.
