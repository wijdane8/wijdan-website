/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This is crucial!
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Space Grotesk', 'sans-serif'],
      mono: ['Space Mono', 'monospace']
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#1a1a1a',
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
          },
        },
      }
    }
  },
  plugins: [],
}
