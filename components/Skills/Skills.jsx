'use client'

import React from 'react';
import './Skills.css';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';



const Skills = () => {
    
     useEffect(() => {
          AOS.init({
               duration: 800,
               once: false,
             })
       }, []) 
 
    return (
     
        <div>

            <section className='mx-5 xl:mx-28 lg:mx-28 md:mx-16'
             id='Skill'
            >

                  <div className='text-3xl font-semibold my-5'>
                    <h1 className='text-white'
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="2000"
                    >My Skills</h1>
                  </div>

                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-5 lg:mx-28 xl:mx-28 my-10 gap-10'>

                    <div className='skillImgDiv' 
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://www.shareicon.net/download/2016/07/09/118544_development.ico" className='skillImg iconColor' alt="" id='html' />
                         <p className='skillsName'>HTML</p>
                    </div>
                    <div className='skillImgDiv nextJsImgDiv' 
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://cdn.iconscout.com/icon/free/png-256/free-css-107-457937.png" className='skillImg grayIcons' alt="" />
                         <p className='skillsName '>CSS</p>
                    </div>
                    <div className='skillImgDiv' 
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/download/372804/bootstrap.svg" className='skillImg iconColor' alt="" />
                         <p className='skillsName'>Bootstrap</p>
                    </div>
                    <div className='skillImgDiv'
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-offset="100"
                      data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/show/368997/tailwind.svg" className='skillImg' alt="" />
                         <p className='skillsName'>Taillwind Css</p>
                    </div>
                    <div className='skillImgDiv' 
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://www.iconbolt.com/iconsets/ionicons-regular/logo-nodejs.svg" className='skillImg' alt="" />
                         <p className='skillsName'>JavaScript</p>
                    </div>
                    <div className='skillImgDiv'
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/show/358128/react.svg" className='skillImg' alt="" />
                         <p className='skillsName'>React JS</p>
                    </div>
                    <div className='skillImgDiv nextJsImgDiv'
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://static-00.iconduck.com/assets.00/brand-nextjs-icon-256x256-zm2coebd.png" className='skillImg nextjsImg' alt="" />
                         <p className='skillsName'>Next JS</p>
                    </div>
                    <div className='skillImgDiv' 
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-offset="100"
                      data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/show/327361/logo-firebase.svg" className='skillImg' alt="" />
                         <p className='skillsName'>Firebase</p>
                    </div>
                    <div className='skillImgDiv' 
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/show/342044/mongodb.svg" className='skillImg' alt="" />
                         <p className='skillsName'>Mongodb</p>
                    </div>
                    <div className='skillImgDiv'  
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/download/314392/node.svg" className='skillImg' alt="" />
                         <p className='skillsName'>Node JS</p>
                    </div>
                     
                  </div>

            </section>

        </div>
    );
};

export default Skills;