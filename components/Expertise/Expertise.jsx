'use client'

import React from 'react';
import './Expertise.css'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
// import getExparticeAll from '@/utils/getExparticeAll';


const expertice= [
   {
      "id": 1,
      "name": "UserInterface",
      "discreiption": "An Interface that is appealing to users and beautiful to behold using modern tools.",
      "icon": <i class='fa-solid fa-desktop text-5xl iconExpert'></i>
  },
  {
      "id": 2,
      "name": "Clean Code",
      "discreiption": "An Interface that is appealing to users and beautiful to behold using modern tools.",
      "icon": <i class="fa-solid fa-code text-5xl"></i>
  },
  {
      "id": 3,
      "name": "User Experience",
      "discreiption": "An Interface that is appealing to users and beautiful to behold using modern tools.",
      "icon": <i class="fa-solid fa-desktop text-5xl"></i>
  },
  {
      "id": 4,
      "name": "Team Work",
      "discreiption": "An Interface that is appealing to users and beautiful to behold using modern tools.",
      "icon": <i class="fa-solid fa-people-group text-5xl"></i>
  },
  {
      "id": 5,
      "name": "Leadership",
      "discreiption": "An Interface that is appealing to users and beautiful to behold using modern tools.",
      "icon": <i class="fa-solid fa-user-tie text-5xl"></i>
  },
  {
      "id": 6,
      "name": "Creative Design",
      "discreiption": "An Interface that is appealing to users and beautiful to behold using modern tools.",
      "icon": <i class="fa-solid fa-pencil text-5xl"></i>
  }
]



const Expertise = async () => { 

    useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, []) 

    return (
        <div className=' '>

            <section className='mx-5 xl:mx-28 md:mx-16 lg:mx-28 my-10 lg:my-20'>

                  <div className='text-2xl lg:text-3xl xl:text-3xl md:text-2xl' id='expert'>
                      <h1 className='font-semibold my-5 text-white' 
                       data-aos="fade-up"
                       data-aos-anchor-placement="top-bottom"
                                           data-aos-offset="100"
                                           data-aos-duration="800"
                      >My Expertise</h1>
                  </div>

                  <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-4'>
                       
                       {
                         expertice.map(expert =>  <div key={expert.id} className='expertiseCard shadow-sm py-5 px-4 rounded rotetedCard' 

                         data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
                         data-aos-offset="100"
                         data-aos-duration="1000"

                         >
                         <div className='flex justify-center  experticDiv'>
                            <p className='text-5xl icon'>{expert.icon}</p>
                         </div>
                         <div className='text-center'>
                            <h1 className='text-2xl font-medium my-4 expertName'>{expert.name}</h1>
                            <p className='expertName'>{expert.discreiption}</p>
                         </div>
                     </div>) 
                       }
                      {/* <div className='expertiseCard shadow-sm border p-4 rounded rotetedCard'>
                          <div className='flex justify-center'>
                             <span className=''><i class="fa-solid fa-desktop text-5xl iconExpert"></i></span>
                          </div>
                          <div className='text-center'>
                             <h1 className='text-2xl font-medium my-4'>UserInterface</h1>
                             <p className=''>An Interface that is appealing to users and beautiful to behold using modern tools.</p>
                          </div>
                      </div> */}
                      {/* <div className='expertiseCard shadow-sm border cursor-pointer p-4 rounded'>
                          <div className='flex justify-center'>
                             <span><i class="fa-solid fa-code text-5xl"></i></span>
                          </div>
                          <div className='text-center'>
                             <h1 className='text-2xl font-medium my-4'>Clean Code</h1>
                             <p>An easily understandable code and good architectural pattern for humans and for future use.</p>
                          </div>
                      </div>
                      <div className='expertiseCard shadow-sm border cursor-pointer p-4 rounded'>
                          <div className='flex justify-center'>
                             <span><i class="fa-solid fa-desktop text-5xl"></i></span>
                          </div>
                          <div className='text-center'>
                             <h1 className='text-2xl font-medium my-4'>User Experience</h1>
                             <p>Products that provide usability, meaningful, empathy and relevant experiences to users.</p>
                          </div>
                      </div>
                      <div className='expertiseCard shadow-sm border cursor-pointer p-4 rounded'>
                          <div className='flex justify-center'>
                             <span><i class="fa-solid fa-people-group text-5xl"></i></span>
                          </div>
                          <div className='text-center'>
                             <h1 className='text-2xl font-medium my-4'>Team Work</h1>
                             <p>A character that forms a formidable collaboration with team members to deliver great product.</p>
                          </div>
                      </div>
                      <div className='expertiseCard shadow-sm border cursor-pointer p-4 rounded'>
                          <div className='flex justify-center'>
                             <span><i class="fa-solid fa-user-tie text-5xl"></i></span>
                          </div>
                          <div className='text-center'>
                             <h1 className='text-2xl font-medium my-4'>Leadership</h1>
                             <p>A character that forms a formidable collaboration with team members to deliver great product.</p>
                          </div>
                      </div>
                      <div className='expertiseCard shadow-sm border cursor-pointer p-4 rounded'>
                          <div className='flex justify-center'>
                             <span><i class="fa-solid fa-pencil text-5xl"></i></span>
                          </div>
                          <div className='text-center'>
                             <h1 className='text-2xl font-medium my-4'>Creative Design</h1>
                             <p>A character that forms a formidable collaboration with team members to deliver great product.</p>
                          </div>
                      </div> */}

                  </div>

            </section>

          

        </div>
    );
};

export default Expertise;