"use client"

import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Script from 'next/script'
import { useEffect, useState } from 'react'



const roboto = Roboto({ subsets: ['latin'] , weight: ["100","300", "400", "500", "700"], className: "--font-roboto"})

// export const metadata = {
//   title: 'Kowsar Ahamed',
//   description: 'Kowsar Ahamed Portfolio',
// }

const RootLayout =({ children }) => {
    
   const [loading, setLoading] = useState(false);
   
   useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)  
    }, 3000)
   },[])

  return (
    <html lang="en">

      <title>MD kowsar Ahamed</title>


      <head>
      
      
         
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

     
    
      <Script src="https://kit.fontawesome.com/816fadddff.js" crossorigin="anonymous"></Script>
     
      <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
       
      </head>

      {
        loading ? 
        <div className="heroBg h-screen flex items-center justify-center">
            <img src="https://img1.picmix.com/output/stamp/normal/4/0/3/5/1835304_51c50.gif" alt="" />
        </div>
        :
        <body className={roboto.className}>
        <Navbar/>
        {children}
        
        </body>
      }
             
     
       
    </html>
  )
}

export default RootLayout;