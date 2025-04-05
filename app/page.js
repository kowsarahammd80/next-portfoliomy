"use client"

// import Image from 'next/image'
import About from "@/components/About/About";
import ContactForm from "@/components/ContactForm/ContactForm";
import Expertise from "@/components/Expertise/Expertise";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";
// import { useEffect, useState } from "react";



const Home = () => {
  
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //      setLoading(false)
  //   },1800)
  // }, [])
 

  return (
    <main className="">

        <div>
        <HeroSection/>
        <About/>
        <Expertise/>
        <Skills/>
        <Work/>
        <ContactForm/>
        <Footer/>
       </div>
       
    </main>
  )
}

export default Home;