---
title: Install Pimox8 Raspberry
date: 2024-11-05 02:42:06
categories: homelab
tags:
    - raspberry
    - proxmox
keywords:
    - composer
    - autoload
    - psr-4
---

# Installing Proxmox Virtual Environment on Raspberry Pi

Proxmox Virtual Environment is an open-source virtualization platform with a powerful web interface for managing virtual machines and containers. This tutorial will guide you through installing Proxmox 8 on a Raspberry Pi.

## Steps

1. **Update System**  
    ```
    sudo apt update
    sudo apt upgrade
    ```

2. **Install curl**  
    ```
    sudo apt install curl
    ```

3. **Set Static IP**  
   Configure a static IP on your Raspberry Pi.

4. **Edit Hosts File**  
    ```
    sudo nano /etc/hosts
    ```

5. **Set Password for root User**  
    ```
    sudo passwd root
    ```

6. **Add Proxmox Repository**  
    ```
    curl -L https://mirrors.apqa.cn/proxmox/debian/pveport.gpg | sudo tee /usr/share/keyrings/pveport.gpg >/dev/null
    echo "deb [arch=arm64 signed-by=/usr/share/keyrings/pveport.gpg] https://mirrors.apqa.cn/proxmox/debian/pve bookworm port" | sudo tee /etc/apt/sources.list.d/pveport.list
    sudo apt update
    ```

7. **Install Proxmox**  
    ```
    sudo apt install ifupdown2
    sudo apt install proxmox-ve postfix open-iscsi pve-edk2-firmware-aarch64
    ```

8. **Configure Postfix**  
   Select "Local only" and set the mail name if prompted.

9. **Access Web Interface**  
    Go to `https://<IP>:8006`, log in with username `root` and your password.

## Conclusion
Proxmox should now be installed, allowing you to manage virtual machines on your Raspberry Pi.