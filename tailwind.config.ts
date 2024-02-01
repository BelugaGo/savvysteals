import { Montserrat } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      'night': { DEFAULT: '#131515', 100: '#040404', 200: '#080909', 300: '#0c0d0d', 400: '#101111', 500: '#131515', 600: '#404747', 700: '#6d7878', 800: '#9ca6a6', 900: '#ced2d2' }, 
      'jet': { DEFAULT: '#2b2c28', 100: '#080908', 200: '#111110', 300: '#191a17', 400: '#21221f', 500: '#2b2c28', 600: '#56584f', 700: '#828578', 800: '#abaea5', 900: '#d5d6d2' }, 
      'persian_green': { DEFAULT: '#339989', 100: '#0a1f1c', 200: '#143d37', 300: '#1f5c53', 400: '#297a6e', 500: '#339989', 600: '#47c2af', 700: '#75d1c3', 800: '#a3e0d7', 900: '#d1f0eb' }, 
      'tiffany_blue': { DEFAULT: '#7de2d1', 100: '#0d3a32', 200: '#197364', 300: '#26ad97', 400: '#44d6be', 500: '#7de2d1', 600: '#97e8db', 700: '#b1eee4', 800: '#cbf4ed', 900: '#e5f9f6' }, 
      'snow': { DEFAULT: '#fffafb', 100: '#650014', 200: '#ca0028', 300: '#ff3059', 400: '#ff95aa', 500: '#fffafb', 600: '#fffbfc', 700: '#fffcfd', 800: '#fffdfd', 900: '#fffefe' }, 
     },
     screens: {
      'xs': '280px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', 
      '3xl': '1920px', 
      '4xl': '2560px', 
      '5xl': '3200px',
      '6xl': '3900px', 
    },
    fontFamily: {
      honk: ['Honk', 'system-ui'],
      lora: ['var(--font-lora)'],
      montserrat: ['var(--font-montserrat)'],
     },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.815rem',
      '7xl': '4.769rem',
      '8xl': '5.961rem',
      '9xl': '7.451rem',
      '10xl': '9.313rem',
    },
    
  },
  plugins: [require("daisyui")],
}

export default config
