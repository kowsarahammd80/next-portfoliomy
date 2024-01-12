

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
      
      
         
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

     
    
      <Script src="https://kit.fontawesome.com/816fadddff.js" crossorigin="anonymous"></Script>
     
      <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
       
      </head>

      <body className={inter.className}>
        <Navbar/>
        {children}
        
        </body>
       
    </html>
  )
}

export default RootLayout;