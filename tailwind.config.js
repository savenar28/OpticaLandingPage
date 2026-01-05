/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FDF8F0',    // Fondo Base
          wine: '#990000',     // Primario / Acento Fuerte
          red: '#CC0000',      // Secundario / Vibrante
          text: '#2D1A1A',     // Texto oscuro
          bone: '#FFFBF5'      // Variante ligera
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
