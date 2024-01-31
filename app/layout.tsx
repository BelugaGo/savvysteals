import type { Metadata } from 'next'
import { Lora } from 'next/font/google'

import './globals.css'

const lora = Lora({weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Savvy Steals',
  description: `Welcome to SavvySteals, where savvy shopping meets incredible savings! Our website is dedicated to bringing you the best deals from across the web, handpicked for maximum value and minimum spend. We understand the thrill of finding top-quality products at prices that don't break the bank. That's why our team works tirelessly, scouring the internet to compile a comprehensive list of the most affordable, yet high-quality products and services available.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet"/>
      </head>
      <body className={lora.className}>{children}</body>
    </html>
  )
}
