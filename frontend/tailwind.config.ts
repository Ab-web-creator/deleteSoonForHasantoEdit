import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
  brand: {
    50: '#faf7ea',
    100: '#f2e8c4',
    200: '#e7d79a',
    300: '#d8c06c',
    400: '#c3a848',
    500: '#ad9335',
    600: '#9d842f',
    700: '#7f6925',
    800: '#66531e',
    900: '#4d3e16',
    950: '#2c230c',
  },

  accent: {
    50: '#edf8f3',
    100: '#d4efe1',
    200: '#abdcbc',
    300: '#7fc698',
    400: '#58af77',
    500: '#3d9660',
    600: '#2f7a4d',
    700: '#27613f',
    800: '#214d34',
    900: '#1b3f2b',
  },

  surface: {
    DEFAULT: '#faf9f7',
    muted: '#f5f4f1',
    elevated: '#ffffff',
  },

  ink: {
    DEFAULT: '#1c1917',
    muted: '#57534e',
    subtle: '#a8a29e',
  },
},
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem',
        btn: '0.75rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(28 25 23 / 0.05), 0 1px 2px -1px rgb(28 25 23 / 0.05)',
        'card-hover':
          '0 8px 24px -4px rgb(28 25 23 / 0.08), 0 4px 8px -4px rgb(28 25 23 / 0.04)',
        nav: '0 1px 0 0 rgb(28 25 23 / 0.06)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6f4b2c 0%, #5c3e24 50%, #4a311d 100%)',
        'brand-soft': 'linear-gradient(135deg, #f8f3ee 0%, #ecdccf 100%)',
        'surface-gradient': 'linear-gradient(180deg, #faf9f7 0%, #f5f4f1 100%)',
      },
    },
  },
  plugins: [typography],
}

export default config