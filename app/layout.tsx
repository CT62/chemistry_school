import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalCartStateProvider } from './contexts/GlobalCartState'
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
      <GlobalCartStateProvider><body className={inter.className}>{children}</body></GlobalCartStateProvider>
    </html>
  )
}

