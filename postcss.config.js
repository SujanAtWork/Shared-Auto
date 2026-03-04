// PostCSS is the bridge that lets Vite process Tailwind's directives
// (@tailwind base / components / utilities) in your CSS files.
// Both packages must be installed:  npm install -D tailwindcss postcss autoprefixer

export default {
  plugins: {
    tailwindcss:  {},   // transforms @tailwind directives → real CSS
    autoprefixer: {},   // adds vendor prefixes for cross-browser support
  },
}