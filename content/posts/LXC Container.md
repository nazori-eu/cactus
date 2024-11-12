---
title: LXC Container on Pimox
date: 2024-10-22 16:56:54
categories: homelab
keywords: 
---

# Pimox Setup Guide

[Download the RootFS](https://fra1lxdmirror01.do.letsbuildthe.cloud/images/)

```bash
# Download the rootfs
wget "${ROOTFS_DOWNLOAD_URL}" -O "${TEMPLATE_FILE_NAME}"

# Move rootfs to Proxmox template cache
sudo mv debian_rootfs.tar.xz /var/lib/vz/template/cache/

Create a Container (CT)

You can create a CT either via the GUI or terminal. To create it via terminal, use:

pct create 200 /var/lib/vz/template/cache/${TEMPLATE_FILE_NAME} \
  --arch arm64 \
  --features nesting=1 \
  --hostname docker \
  --ostype debian \
  --net0 name=eth0,bridge=vmbr0,firewall=1,ip=dhcp,ip6=dhcp \
  --password='much $ecure passw0rd' \
  --tags docker-host
```

Explanation of Parameters

	•	pct create: Command to create a CT container.
	•	200: Unique ID for the VM (choose between 1 - N).
	•	/var/lib/vz/template/cache/${TEMPLATE_FILE_NAME}: Path to the OS template or backup file.
	•	--arch arm64: Architecture (for Raspberry Pi, arm64).
	•	--features nesting=1: Enable nesting, required for Docker.
	•	--hostname docker: Hostname for the container on the network.
	•	--ostype debian: OS type, matching the template we chose.
	•	--net0 name=eth0,bridge=vmbr0,firewall=1,ip=dhcp,ip6=dhcp: Network settings.
	•	--ssh-public-keys ~/.ssh/id_rsa.pub: (Optional) SSH keys for root user.
	•	--ssh-public-keys ~/.ssh/remote_id_rsa.pub: (Optional) SSH keys for user.
	•	--password='much $ecure passw0rd': Password for container (alternative to SSH key).
	•	--tags docker-host: Tags for the container (meta information).

## Network Configuration for Container

When configuring the CT, set IP to Static. Do not enter any specific IP addresses.
Edit the Network Configuration File

```bash
nano /etc/systemd/network/eth0.network
```

Add the following configuration:

```bash
[Match]
Name=eth0

[Network]
DHCP=yes
```

Restart Systemd Networkd
To apply changes, restart systemd-networkd:

```bash
systemctl restart systemd-networkd
```

Verify IP Settings

Check if the static IP is set (the DHCP IP may still appear):

```bash
ip -c a
```

After reboot, the static IP should be correctly set up.

