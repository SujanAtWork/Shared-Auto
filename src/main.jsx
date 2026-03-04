// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ─── CSS Import Order ───────────────────────────────────────────────────────
// Order is critical. Each layer builds on the previous one.
//
//  1. index.css       → @tailwind base/components/utilities
//                       (Tailwind's reset + all utility classes)
//
//  2. globals.css     → Google Fonts, CSS variables, keyframes,
//                       and custom helper classes (.fade-up, .noise, etc.)
//                       Must come AFTER index.css so custom classes
//                       can override Tailwind's base reset if needed.
//
// ⚠️  Do NOT import App.css here — it has been intentionally emptied
//     to prevent Vite's default styles from conflicting with Tailwind.
// ───────────────────────────────────────────────────────────────────────────
import "./index.css";
import "./styles/globals.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);