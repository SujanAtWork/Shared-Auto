/** @type {import('tailwindcss').Config} */
export default {
  // ─── Content paths ────────────────────────────────────────────────────────
  // Tailwind scans these files for class names and removes
  // any unused classes from the production build (tree-shaking).
  // If a file isn't listed here, its classes will be purged → broken styles.
  content: [
    "./index.html",           // root HTML shell
    "./src/**/*.{js,jsx}",    // all JS/JSX files anywhere under src/
  ],

  theme: {
    extend: {
      // ── Brand colors ──────────────────────────────────────────────────────
      // Adds bg-brand-yellow, text-brand-black, etc. as Tailwind classes
      colors: {
        brand: {
          yellow:        "#facc15",
          "yellow-hover":"#fde047",
          black:         "#0a0a0a",
          surface:       "#18181b",
          border:        "#27272a",
        },
      },

      // ── Font families ─────────────────────────────────────────────────────
      // Adds font-display, font-body, font-mono as Tailwind classes
      fontFamily: {
        display: ['"Bebas Neue"',       "sans-serif"],
        body:    ['"DM Sans"',          "sans-serif"],
        mono:    ['"JetBrains Mono"',   "monospace"],
      },

      // ── Custom animations ─────────────────────────────────────────────────
      // Adds animate-fade-up, animate-shimmer, etc. as Tailwind classes.
      // The actual @keyframes are defined in globals.css.
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)"    },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        "pulse-ring": {
          "0%":   { transform: "scale(1)",   opacity: "0.6" },
          "100%": { transform: "scale(1.5)", opacity: "0"   },
        },
        tick: {
          "0%, 100%": { transform: "scaleY(1)"   },
          "50%":      { transform: "scaleY(0.4)" },
        },
      },
      animation: {
        "fade-up":    "fadeUp 0.45s ease both",
        "shimmer":    "shimmer 3s linear infinite",
        "pulse-ring": "pulse-ring 1.4s ease-out infinite",
        "tick":       "tick 1.8s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};