Perfect 👍 You want your entire **README** in proper **GitHub Markdown** format with clean headers, tables, code blocks, and callouts. I’ll polish the one I gave you into a **ready-to-paste `README.md`** file.

Here’s the final version 👇

---

````markdown
# ⚡ Volt.new – Transform Ideas into Websites

![Volt Preview](https://github.com/user-attachments/assets/4bf19b29-3563-4a17-a788-d857c92138c4)

---

## 🌟 Overview

**Volt.new** is a dynamic platform that instantly converts your ideas into fully functional websites.  
Just **describe your idea in plain language**, and Volt will:

1. Generate a complete website using **Google Gemini LLM**
2. Run it live in your browser with **StackBlitz WebContainer**
3. Allow you to **edit code in real time**
4. Let you **download the full source code** as a ZIP

✨ Perfect for **developers, designers, and entrepreneurs** who want rapid prototyping without the hassle of setup or deployment.

---

## 🚀 Features

### 🧠 Prompt to Website

Generate a website by simply typing prompts like:  
_“Create a portfolio homepage with dark mode”_.

### ⚡ Live Website Preview

Instantly preview generated sites inside the browser using **StackBlitz WebContainer**.

### ✍️ Code Editing

Edit **HTML, CSS, and JavaScript** in real time with hot reload.

### 📦 Download as ZIP

Export your project as a **ready-to-use ZIP file**.

### 📁 Step-by-Step View

Understand how different parts of the generated website come together.

---

## 💻 Tech Stack

| **Category**   | **Technology**                 |
| -------------- | ------------------------------ |
| Frontend       | React, TypeScript, TailwindCSS |
| Animations     | Framer Motion                  |
| Backend        | Express.js, Node.js            |
| AI Integration | Google Gemini API              |
| Live Preview   | StackBlitz WebContainer        |
| Env Vars       | `.env` for Gemini API key      |

---

## 📥 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Volt.new.git
cd Volt.new
```
````

### 2️⃣ Install Dependencies

**Frontend**

```bash
cd Frontend
npm install
```

**Backend**

```bash
cd Backend
npm install
```

### 3️⃣ Setup Environment Variables

In the **Backend** directory, create a `.env` file:

```env
GEMINI_API_KEY=your-google-gemini-api-key
PORT=3000
```

### 4️⃣ Run the Project

Start **Backend**:

```bash
cd Backend
npm run start
```

Start **Frontend**:

```bash
cd Frontend
npm run dev
```

---

## 🛠 Backend Configuration Note

Your backend includes a flexible `config.ts` to run both locally and in production:

```ts
// Backend/src/config.ts
export const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

export const API_URL = process.env.API_URL || "http://localhost:3000";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";
```

👉 Change env vars for smooth switching between **local development** and **production deployment**.

---

## 🤝 Contribution

### How to Contribute

1. **Fork** the repository
2. **Clone** your fork:

   ```bash
   git clone https://github.com/your-username/Volt.new.git
   ```

3. **Create a branch**:

   ```bash
   git checkout -b feature/your-feature
   ```

4. **Commit your changes**:

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push & Raise PR**:

   ```bash
   git push origin feature/your-feature
   ```

### Ideas for Contribution

- Add support for multiple programming languages
- Improve UI/UX for preview and file management
- Add authentication for saving past prompts
- Enable cloud storage for generated projects

---

## 🌟 Support

If you find **Volt.new** useful, please consider:

- ⭐ Starring the repo
- 🍴 Forking it
- 📨 Sharing with your network

[![Stars](https://img.shields.io/github/stars/your-username/Volt.new)](https://github.com/your-username/Volt.new/stargazers)
[![Forks](https://img.shields.io/github/forks/your-username/Volt.new)](https://github.com/your-username/Volt.new/network/members)

---

## 🛡 License

Released under the **MIT License**.
Use it freely, improve it boldly, and build something amazing! 🚀

---

## 📬 Contact

💌 Email: [your-email@example.com](mailto:your-email@example.com)
💼 LinkedIn: [Your Name](https://linkedin.com/in/your-profile)
🐦 Twitter: [@your_handle](https://twitter.com/your_handle)

---

> Made with ⚡ by combining React, Gemini, Express, and pure AI magic ✨

```

---

✅ This is **fully GitHub-ready Markdown**.
Do you also want me to add a **Deployment Guide (Frontend → Vercel, Backend → Render/Vercel)** section so collaborators know how to host it live?
```
