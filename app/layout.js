import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kowsar Ahamed',
  description: 'Kowsar Ahamed Portfolio',
}

const RootLayout =({ children }) => {
  return (
    <html lang="en">
      <head>
      <head>
        <Script src="https://kit.fontawesome.com/816fadddff.js" crossorigin="anonymous"></Script>
      </head>
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}

export default RootLayout;