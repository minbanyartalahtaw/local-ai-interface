# Interface for Local Ollama

A modern web application interface for running local Ollama models, built with Next.js for the frontend, Node.js for the backend, and MongoDB for data storage. This guide covers project setup, installation instructions for all dependencies (Node.js, MongoDB, Ollama) on macOS and Linux, and how to get started.

---

## **Project Features**

- Next.js frontend for interactive user experience
- Node.js backend API for model communication and data management
- MongoDB as the primary database
- Local Ollama model integration for AI-powered features

---

## **Installation Guide**

### **A. Node.js and npm Installation**

#### **On macOS**

1. Download the Node.js macOS installer from [the official Node.js website.](https://nodejs.org/en)
2. Verify installation:

```bash
node -v
npm -v
```

You should see version numbers for both Node.js and npm.

#### **On Linux (Ubuntu/Debian)**

```bash
sudo apt update
sudo apt upgrade
sudo apt install nodejs
sudo apt install npm
node -v
npm -v
```

You should see version numbers confirming successful installation.

---

### **B. MongoDB Installation**

#### **On macOS (with Homebrew)**

1. Install Homebrew (if not already installed):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Update Homebrew and tap MongoDB formula:

```bash
brew update
brew tap mongodb/brew
```

3. Install MongoDB Community Edition:

```bash
brew install mongodb-community
```

This will install the latest MongoDB version[3].

#### **On Linux (Ubuntu/Debian)**

1. visit to the [MongoDB Offical Page](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/)

---

### **C. Ollama Installation**

#### **On macOS**

1. Download Ollama from the official site.
2. Locate the `.zip` file in your `~/Downloads` folder and extract it.
3. Move `Ollama.app` to your Applications folder.
4. Open `Ollama.app` and follow the setup wizard to complete installation, including the command line tool.

#### **On Linux**

- Visit the official Ollama website for Linux installation instructions (usually involves downloading a binary or running an install script).

---

## **Getting Started**

### **1. Download the Project**

- Download the project as a ZIP file from https://github.com/minbanyartalahtaw/local-ai-interface
- Extract the ZIP file to your desired directory.

### **2. Navigate to the Project Directory**

```bash
cd path/to/your/project-directory
```

---

## **Project Setup**

### **1. Install Project Dependencies**

```bash
npm install
```

This command installs all required packages for both frontend and backend.

### **2. Configure Environment Variables**

- Create a `.env` file in the root directory.
- Add your MongoDB connection string and any other required environment variables.

### **3. Start the Application**

- For development:

```bash
npm run dev
```

- For production:

```bash
npm run build
npm start
```

---

## **Summary Table: Installation Steps**

| Component | macOS                                            | Linux                                            |
| --------- | ------------------------------------------------ | ------------------------------------------------ |
| Node.js   | Download `.pkg` and install[1]                   | `sudo apt install nodejs npm` or use NVM[2]      |
| MongoDB   | `brew install mongodb-community`[3]              | Download, extract, and run binary[4]             |
| Ollama    | Download ZIP, move to Applications, run setup[5] | Official Linux instructions (see Ollama website) |

---

## **Notes**

- Ensure MongoDB and Ollama are running before starting the Node.js backend.
- For detailed configuration, consult the respective official documentation for each dependency.

---
