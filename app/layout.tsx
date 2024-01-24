import type { Metadata } from 'next'
import { Inter, Lora, } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
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
      <body className={lora.className}>{children}</body>
    </html>
  )
}
