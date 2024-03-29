import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'arial': ['Arial', 'sans-serif'],
        'times-new-roman': ['"Times New Roman"', 'serif'],
        'georgia': ['Georgia', 'serif'],
        'courier-new': ['"Courier New"', 'monospace'],
        'verdana': ['Verdana', 'sans-serif'],
        'trebuchet-ms': ['"Trebuchet MS"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

export default config
