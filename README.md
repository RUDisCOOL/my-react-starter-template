# ⚡ React + Vite + TailwindCSS + ShadCN UI + React Router Starter

A modern, lightweight starter template for building React apps with:

- ⚛️ React (via Vite)
- 🚦 React Router v6+ for client-side routing
- 🎨 TailwindCSS for utility-first styling
- 🧩 ShadCN UI for beautiful accessible components
- 🌗 Dark mode toggle via Tailwind’s `class` strategy

---

## 🚀 Quick Start

npx degit yourusername/react-starter-template my-app
cd my-app
npm install
npm run dev

---

## 🌙 Dark Mode

Dark mode is enabled using Tailwind’s `class` strategy.  
A theme toggle button is included in `components/ThemeToggle.jsx`.

---

## 🧭 Routing

Uses React Router v6+ for defining routes.  
Example config lives in `router/index.jsx` and can be extended easily.

Example:

import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';

const router = createBrowserRouter([
{ path: '/', element: <Home /> },
{ path: '/about', element: <About /> },
]);

export default router;

---

## 🛠️ Included Tooling

| Tool         | Purpose                      |
| ------------ | ---------------------------- |
| Vite         | Fast dev server and builds   |
| React        | UI library                   |
| React Router | SPA routing                  |
| TailwindCSS  | Utility-first CSS            |
| ShadCN UI    | Accessible UI components     |
| Dark mode    | Tailwind `darkMode: 'class'` |

---

## 📦 Deployment

To build for production:

npm run build

To preview locally:

npm run preview

---

## 🧰 Customization

- Extend tailwind.config.js for your design system
- Add ShadCN components with:

npx shadcn-ui@latest add button

- Modify router/index.jsx to update routes

---

## 📄 License

MIT — use it freely, modify it fully.

---

## 🙌 Acknowledgements

- Vite: https://vitejs.dev
- TailwindCSS: https://tailwindcss.com
- React Router: https://reactrouter.com
- ShadCN UI: https://ui.shadcn.com
