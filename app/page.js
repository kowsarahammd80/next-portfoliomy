// import Image from 'next/image'
import About from "@/components/About/About";
import ContactForm from "@/components/ContactForm/ContactForm";
import Expertise from "@/components/Expertise/Expertise";
import HeroSection from "@/components/HeroSection/HeroSection";
import Skills from "@/components/Skills/Skills";


const Home = () => {
  return (
    <main className="bg-white">
        <HeroSection/>
        <About/>
        <Expertise/>
        <Skills/>
        <ContactForm/>
    </main>
  )
}

export default Home;