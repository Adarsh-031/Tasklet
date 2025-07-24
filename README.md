# ✅ Tasklet - Todo App

**Tasklet** is a simple, mobile-responsive Todo List application built using **React** and **Tailwind CSS**. It allows users to manage daily tasks efficiently with a clean interface and persistent storage using **localStorage**.

---

## ✨ Features

- ✅ Add new tasks  
- ✏️ Edit existing tasks  
- 🗑️ Delete tasks  
- ✅ Mark tasks as completed  
- 👁️ Toggle visibility of completed tasks  
- 💾 Persist tasks in localStorage (survives refresh)  
- 📱 Fully responsive on mobile & desktop  

## 🛠️ Tech Stack

- ⚛️ **React** – UI framework  
- 🎨 **Tailwind CSS** – Utility-first CSS  
- 🧠 **UUID** – Generates unique IDs for tasks  
- 💾 **LocalStorage** – Saves todos in the browser  

---

## 📁 Folder Structure

```
tasklet/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── README.md
```
---

## 📱 Mobile Responsive Design

This app uses Tailwind's responsive classes like `sm:`, `flex-col`, `max-w`, `w-full`, and `px-4` to provide seamless UX across:

- 📱 Mobile phones  
- 💻 Tablets and desktops  

---

## 🔐 Local Storage Handling

Tasks are stored in `localStorage`, and automatically loaded on page refresh. A `useRef` flag prevents localStorage from being overwritten on first render.





