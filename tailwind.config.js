/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080a0e",
        surface: "#111520",
        accent: "#c8a96e",
        "text-primary": "#e8e6e0",
        "text-muted": "rgba(232, 230, 224, 0.4)",
        success: "#64c878",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 10px #64c878' },
          '50%': { opacity: .5, boxShadow: '0 0 2px #64c878' },
        }
      }
    },
  },
  plugins: [],
}
