'use client'

import React from 'react';
import './HeroSection.css';
import {Link} from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';




const HeroSection = () => {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, []) 

    return (
        <div className='pt-12 lg:pt-20 xl:pt-20 md:pt-10 heroBg ' id='heroSection'>

            <section className='mx-5 lg:mx-24 xl:mx-24 md:mx-16 heroBottoomBordar' 
            >

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-screen'> 

                     <div className='flex justify-center items-center py-5'  
                      
                      data-aos="fade-right"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-offset="200"
                      data-aos-duration="3000"
                     >

                        <div className='text-design'>

                          <p className='text-lg font-semibold text-design salamText'>Assalamu Alaikum</p>
                          <h1 className='text-xl lg:text-4xl xl:text-4xl md:text-3xl font-semibold my-3 selfTExt'>My Selfe, <span className='nameText'>Md Kowsar Ahamed</span></h1>
                          <p className='text-xl xl:text-3xl lg:text-3xl md:text-2xl selfTExt font-semibold my-2 lg:my-5'><Typewriter
            words={['WEB DEVELOPER', 'FRONT-END DEVELOPER', 'REACT JS DEVELOPER']}
            loop={1000}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            /></p>

                          <div className='my-8 xl:my10 lg:my-10 md:my-10'>
                            <Link  to="work" 
                            smooth={true} offset={-100} duration={500} className='me-5 heroContact-button'>My Work</Link>
                            <Link to="contact" className='heroContact-button'>Hire Me</Link>
                          </div>

                          <div className='text-4xl lg:text-5xl xl:text-5xl mt-6 cursor-pointer'>
                             
                             <a href="https://github.com/kowsarahammd80"><span className='me-5 socialLink'><i class="fa-brands fa-github iconShdow"></i></span></a>
                            <a href="https://www.facebook.com/KowsarAhamedShuvo/"><span className='me-5 socialLink'><i class="fa-brands fa-facebook iconShdow"></i></span></a> 
                            <a href="https://www.linkedin.com/in/md-kowsar-ahamed-b425a2257"><span className='me-5 socialLink'><i class="fa-brands fa-linkedin iconShdow"></i></span></a> 
                            <a href="https://www.instagram.com/loading_shuvo/"><span className='me-5 socialLink'><i class="fa-brands fa-instagram iconShdow"></i></span></a>
                            <a href="https://wa.me/+8801760075031"><span className='socialLink'><i class="fa-brands fa-whatsapp iconShdow"></i></span></a>
                            
                          </div>

                        </div> 

                     </div>

                     <div className='flex justify-center items-start lg:items-center mx-5 lg:mx-28 xl:mx-28 md:mx-16'>

                        <div className='iamgeDiv' data-aos="fade-left"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-offset="100"
                      data-aos-duration="800">

                           <img src="https://i.ibb.co/XzvzSFB/Untitled-design-6.png" className='heroImg' alt="" />

                        </div>   
                        
                     </div>

                </div>

            </section>
            
        </div>
    );
};

export default HeroSection;