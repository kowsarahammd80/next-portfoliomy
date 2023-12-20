// import Image from 'next/image'
import About from "@/components/About/About";
import Expertise from "@/components/Expertise/Expertise";
import HeroSection from "@/components/HeroSection/HeroSection";


const Home = () => {
  return (
    <main className="bg-white">
        <HeroSection/>
        <About/>
        <Expertise/>
    </main>
  )
}

export default Home;