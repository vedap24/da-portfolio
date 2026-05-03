# Veda Praneeth - Data Analyst Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)


Welcome to my personal Data Analytics portfolio! This project was built to showcase my expertise in marketing analytics, SQL, Python, and data visualization. 


## 🌟 Why React & Vite?
This portfolio was purposely built with **React** and **Vite** rather than a standard website builder. As a Data Analyst, I wanted a portfolio that reflects modern web capabilities—delivering blazing-fast performance, dynamic data-inspired micro-animations, and a highly responsive layout that looks incredible on both desktop and mobile devices.

---

## 🚀 How to Run the Website Locally

If you'd like to use this template or run it locally:

1. Install dependencies (only needed the first time):
   ```bash
   npm install
   ```
2. Start the local server:
   ```bash
   npm run dev
   ```
3. Open the link provided in your terminal (usually `http://localhost:5173`) in your browser.

---

## 📝 How to Update Your Information

All the text and content on the website live inside the `src/components/` folder. Here is exactly where you need to go to change specific things:

### 1. Update Name, Role, or Introduction
- **File to Edit:** `src/components/Hero.jsx`
- **What to do:** Look for the text inside the `<h1>`, `<h2>`, and `<p>` tags and update them.

### 2. Update Your "About Me" Paragraphs
- **File to Edit:** `src/components/About.jsx`
- **What to do:** You will see paragraphs wrapped in `<p>` tags. Add or remove them as needed.

### 3. Add or Remove Skills & Focus Areas
- **File to Edit:** `src/components/Skills.jsx`
- **What to do:** At the top of this file, you will see two arrays:
  ```javascript
  const tools = ['SQL', 'Python', 'Excel', 'Power BI', 'Tableau', 'Google Analytics'];
  ```
  Simply add or remove words inside the quotes. The website automatically generates the styled tags for you!

### 4. Add a New Project
- **File to Edit:** `src/components/Projects.jsx`
- **What to do:** At the top of the file, there is a list called `placeholders`. To add a new project, copy one of the `{ ... }` blocks, paste it into the list, and update the text. The timeline will automatically update!

### 5. Update Email or Social Links
- **File to Edit:** `src/components/Contact.jsx`
- **What to do:** You can update the `href` links for email and GitHub.

---

## 🔮 Future Expansion: Adding a Blog

When you are ready to add a blog or articles later, here are the beginner-friendly steps:

1. **Create the Component:** Create a new file called `Blog.jsx` inside `src/components/`. 
2. **Add it to the Main Page:** Open `src/App.jsx`. Add `import Blog from './components/Blog'` at the top, and put `<Blog />` right below `<Projects />`. 
3. **Multi-Page Setup (Advanced):** Run `npm install react-router-dom` to set up routing if you want a separate page just for your blog.

---

## 🌐 Deploying to the Internet

When you are ready to make your website live for everyone to see:
1. Make sure you push your code to your GitHub repository.
2. You can use platforms like **Vercel** or **Netlify** (they are free and very beginner-friendly).
3. Log into Vercel/Netlify with your GitHub account, select your `da-portfolio` repository, and hit "Deploy". They will handle the rest!

---

## 📬 Connect with Me
- **LinkedIn:** [linkedin.com/in/vedapraneeth](https://www.linkedin.com/in/vedapraneeth/)
- **Email:** vedapraneeth9@gmail.com
- **GitHub:** [github.com/vedap24](https://github.com/vedap24)

---
*This portfolio is open-source under the MIT License. Feel free to fork and use it as a template for your own data analytics portfolio!*
