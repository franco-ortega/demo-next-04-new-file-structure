import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS v13',
  description: 'Trying out NextJS v13',
}

export default function RootLayout({ children }) {
  console.log(inter.className)
  return (
    <html lang="en">
      <body className={inter.className}>
        <header><h1>Header H1</h1></header>
        {children}
      </body>
    </html>
  )
}
