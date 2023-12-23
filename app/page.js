// import Image from 'next/image'
import About from "@/components/About/About";
import ContactForm from "@/components/ContactForm/ContactForm";
import Expertise from "@/components/Expertise/Expertise";
import HeroSection from "@/components/HeroSection/HeroSection";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";


const Home = () => {
  return (
    <main className="bg-white">
        <HeroSection/>
        <About/>
        <Expertise/>
        <Skills/>
        <Work/>
        <ContactForm/>
    </main>
  )
}

export default Home;