import type { Config } from 'tailwindcss'
import bgbar from '../AgendamentoBarbeiro/public/images/bgbar.jpg'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: { 'bgbar': "url(/images/bgbar.jpg)"},
    },
  },
  plugins: [],
}
export default config
