// import Image from 'next/image'
import About from "@/components/About/About";
import ContactForm from "@/components/ContactForm/ContactForm";
import Expertise from "@/components/Expertise/Expertise";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";


const Home = () => {
  return (
    <main className="">
        <HeroSection/>
        <About/>
        <Expertise/>
        <Skills/>
        <Work/>
        <ContactForm/>
        <Footer/>
    </main>
  )
}

export default Home;