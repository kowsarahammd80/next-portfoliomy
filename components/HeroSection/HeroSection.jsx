"use client"

import React from 'react';
import './HeroSection.css';
import Link from 'next/link';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";




const HeroSection = () => {

    const particlesInit = async(main)=> {
        await loadFull(main);
      };

    return (
        <div className='pt-10 lg:pt-20 xl:pt-20 md:pt-10 '>


<Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
        "particles": {
            "number": {
                "value": 10,
                "density": {
                    "enable": false,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fffff"
            },
            "shape": {
                "type":"star",
                "options": {
                    "sides": 5
                }
            },
            "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 600,
                "color": "#fffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["grab"]
                },
                "onclick": {
                    "enable": true,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "color": "#111",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}
    />


            <section className='mx-5 lg:mx-24 xl:mx-24 md:mx-16'>


                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-screen'>
                    

                     <div className='flex justify-center items-center py-5'>

                        <div className='text-design'>

                          <p className='text-lg font-semibold text-design'>Assalamu Alaikum</p>
                          <h1 className='text-xl lg:text-3xl xl:text-3xl md:text-3xl font-semibold mt-1'>My Selfe, Md Kowsar Ahamed</h1>
                          <p className='text-xl font-semibold mt-1'>Front End Developer</p>

                          <div className='my-5'>
                            <Link href="#expert" className='me-5 heroContact-button'>My Work</Link>
                            <Link href="" className='heroContact-button'>Hire Me</Link>
                          </div>

                          <div className='text-4xl lg:text-5xl xl:text-5xl mt-5 cursor-pointer'>
                             
                             <a href="https://github.com/kowsarahammd80"><span className='me-5'><i class="fa-brands fa-github iconShdow"></i></span></a>
                            <a href="https://www.facebook.com/KowsarAhamedShuvo/"><span className='me-5'><i class="fa-brands fa-facebook iconShdow"></i></span></a> 
                            <a href="https://www.linkedin.com/in/md-kowsar-ahamed-b425a2257"><span className='me-5'><i class="fa-brands fa-linkedin iconShdow"></i></span></a> 
                            <a href="https://www.instagram.com/loading_shuvo/"><span className='me-5'><i class="fa-brands fa-instagram iconShdow"></i></span></a>
                            <a href="https://wa.me/+8801760075031"><span ><i class="fa-brands fa-whatsapp iconShdow"></i></span></a>
                            
                          </div>

                        </div> 

                     </div>

                     <div className='flex justify-center items-start lg:items-center mx-5 lg:mx-28 xl:mx-28 md:mx-16'>

                        <div className='iamgeDiv'>

                           <img src="https://scontent.fdac19-1.fna.fbcdn.net/v/t39.30808-6/337982794_1173057913395534_7542538759370505223_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=atQqv9RkaYEAX91H8Ex&_nc_ht=scontent.fdac19-1.fna&oh=00_AfBHOd7hVwXFEawYiaPylN0gVFJPGzFU4N4sJhXppxDFOA&oe=658F4321" className='heroImg' alt="" />

                        </div>   
                        
                     </div>

                </div>

            </section>
            
        </div>
    );
};

export default HeroSection;