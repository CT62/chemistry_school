import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalCartState } from './contexts/GlobalCartState'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'C.S.G',
  description: 'Chemistry school of Growth'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalCartState><body className={inter.className}>{children}</body></GlobalCartState>
    </html>
  )
}

