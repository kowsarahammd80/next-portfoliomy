// import Image from 'next/image'
import About from "@/components/About/About";
import HeroSection from "@/components/HeroSection/HeroSection";


const Home = () => {
  return (
    <main className="bg-white">
        <HeroSection/>
        <About/>
    </main>
  )
}

export default Home;