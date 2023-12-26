import './globals.css'
import Provider from './context/AuthContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
    <Provider>
    <html lang="en">
      <body className={inter.className}><Provider>{children}</Provider></body>
    </html>
    </Provider>
  )
}

