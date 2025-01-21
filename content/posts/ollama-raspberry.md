---
title: Ollama in Rasberry Pi 5
date: 2025-01-21 09:00:00
tags:
    - homelab
categories:
    - homelab
keywords:
    - markdown
    - code block
---

## What is Ollama?

Ollama is a platform designed to run state-of-the-art AI models locally on your device. It simplifies the process of deploying large language models (LLMs) like **Qwen-2.5 (3B)** and **Gemma2 (2B)** on systems like the **Raspberry Pi 5**. By supporting both low- and high-complexity models, Ollama lets users run sophisticated AI directly on their devices without needing cloud services.

With **Ollama** running on your Raspberry Pi 5, you can have easy access to AI for tasks like generating text, answering questions, and more—all with a local, efficient setup.

### Installing Ollama on Raspberry Pi 5

To run Ollama on your Raspberry Pi 5, follow these steps:

1. **Update and upgrade your Raspberry Pi**:
   Open a terminal and run the following commands to make sure your Raspberry Pi 5 is up to date:
   
   ```bash
   sudo apt update
   sudo apt upgrade -y
   ```

2. **Install dependencies**:
   Ollama requires some dependencies to run, including **curl** and **systemd**. Install them by running:
   
   ```bash
   sudo apt install curl systemd -y
   ```

3. **Download the Ollama installation script**:
   Ollama provides an installation script that will set up everything you need. Download and run it with:
   
   ```bash
   curl -sSL https://ollama.com/install.sh | sudo bash
   ```

4. **Verify the installation**:
   Once the script finishes, verify that Ollama was successfully installed by running:
   
   ```bash
   ollama --version
   ```
   This should show the version of Ollama that is installed.

5. **Start Ollama**:
   After installation, Ollama should start automatically as a system service. You can confirm it’s running by checking the status:
   
   ```bash
   sudo systemctl status ollama
   ```
   If it's not running, start it manually with:
   
   ```bash
   sudo systemctl start ollama
   ```

### Running Models with Ollama

Once Ollama is installed and running, you can start pulling models and using them on your Raspberry Pi 5.

1. **Pull a model**:
   You can use Ollama to pull models like **Qwen-2.5 (3B)** or **Gemma2 (2B)**. For example, to pull the **Qwen-2.5 (3B)** model, run:
   
   ```bash
   ollama pull qwen-2.5:3b
   ```

2. **Run a model**:
   Once the model is pulled, you can run it interactively. For instance, to run the **Qwen-2.5 (3B)** model, use the following command:
   
   ```bash
   ollama run qwen-2.5:3b
   ```
   This will open an interactive session where you can type in queries or prompts, and the model will generate responses.

3. **Running Gemma2 (2B)**:
   Similarly, to pull and run **Gemma2 (2B)**, use:
   
   ```bash
   ollama pull gemma2:2b
   ollama run gemma2:2b
   ```

## Qwen-2.5 (3B) on Raspberry Pi 5

**Qwen-2.5 (3B)** is a robust language model designed to handle a wide range of natural language processing (NLP) tasks. It is the third iteration of the **Qwen series**, developed by **Qianwen AI**. This model is designed for high-performance environments and is capable of complex text generation, conversation, and contextual understanding. The **3B** in the name refers to the **3 billion parameters** the model uses, which allows it to have a better grasp of nuanced language, making it suitable for advanced applications in text generation and language comprehension.

The model was specifically created to balance computational efficiency with high-quality output, meaning it can deliver impressive performance without requiring the immense hardware demands of even larger models. For Raspberry Pi 5 users, it provides a powerful option to run sophisticated AI models locally, without relying on cloud-based solutions.

Despite being a high-performance model, it is still optimized enough to work on edge devices like the **Raspberry Pi 5**, which boasts improved CPU and GPU performance over previous versions. Running **Qwen-2.5 (3B)** on the Raspberry Pi 5 opens up opportunities for building advanced conversational agents, content generation tools, and more.

## Gemma2 (2B) on Raspberry Pi 5

**Gemma2 (2B)** is a smaller, more lightweight model compared to **Qwen-2.5 (3B)**, and it's designed specifically to perform well in resource-constrained environments. The **2B** refers to its **2 billion parameters**, making it less resource-intensive than Qwen-2.5 but still highly capable in many NLP tasks.

Developed by **Gemma AI**, the **Gemma2 (2B)** model is a second-generation language model built for smaller-scale applications like conversational AI and automated text generation. Despite its smaller size, the model is still quite powerful, offering impressive text generation and understanding capabilities for its parameter count. It was optimized to run efficiently on devices like the **Raspberry Pi 5**, making it ideal for users who need a model that doesn't require the immense hardware resources of larger models but still delivers strong performance.

Because of its efficiency, **Gemma2 (2B)** is perfect for running in environments like home automation systems, chatbot applications, or any context where a lighter model with fast response times is needed. Its smaller footprint allows it to run smoothly on the Raspberry Pi 5, giving users access to powerful AI without the need for external cloud-based solutions.
