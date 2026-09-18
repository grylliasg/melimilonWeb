/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          1: '#2f1d12',
          2: '#4a2e20',
          3: '#5d3927',
          4: '#7a4a2d',
          5: '#c8842f',
          6: '#d99a4b',
          7: '#e8b26e',
          8: '#f2c98c',
          9: '#f7e6c6',
          10: '#fff7eb',
        },
        grey: {
          1: '#1f160f',
          2: '#392c23',
          3: '#574236',
          4: '#776159',
          5: '#8d7d73',
          6: '#aa9a90',
          7: '#c3b7ae',
          8: '#ddd2ca',
          9: '#f1e8e3',
          10: '#fffaf7',
        },
      },
      boxShadow: {
        light: '0 18px 45px rgba(57, 35, 20, 0.12)',
        dark: '0 24px 60px rgba(42, 24, 14, 0.18)',
      },
      transitionDuration: { 300: '300ms' },
      backgroundImage: {
        'warm-glow': 'radial-gradient(circle at top, rgba(242, 201, 140, 0.35), transparent 55%)',
      },
    },
  },
  plugins: [],
}
