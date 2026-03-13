import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        ink: '#1A1A1A',
        muted: '#6B6B6B',
        accent: '#9B8FB8',
        'accent-hover': '#8A7DA8',
        'accent-soft': '#C4BBD9',
        divider: '#E5E0DA',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        'display-cn': ['var(--font-display-cn)', 'var(--font-display)', 'serif'],
      },
      keyframes: {
        'scroll-line': {
          '0%': { top: '-50%' },
          '100%': { top: '100%' },
        },
      },
      animation: {
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
