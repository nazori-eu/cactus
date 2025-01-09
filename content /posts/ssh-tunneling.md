---
title: SSH Tunneling
date: 2025-01-09
tags:
    - hacking
categories:
    - hacking
keywords:
    - markdown
    - code block
---

SSH tunneling allows you to securely forward traffic from one machine to another over an encrypted SSH connection.
This is useful for accessing services behind firewalls or encrypting non-secure protocols.

## Types of SSH Tunneling
1. **Local Port Forwarding**  
   Forwards a local port to a remote machine's port.  
   Example: `ssh -L 8080:remotehost:80 user@server`

2. **Remote Port Forwarding**  
   Forwards a remote port to a local machine's port.  
   Example: `ssh -R 9090:localhost:3306 user@server`

3. **Dynamic Port Forwarding**  
   Acts as a SOCKS proxy to route traffic dynamically.  
   Example: `ssh -D 1080 user@server`

## Use Cases
- Bypassing firewalls or NAT restrictions.
- Encrypting unencrypted protocols (HTTP, FTP).
- Securely accessing databases or web servers.
