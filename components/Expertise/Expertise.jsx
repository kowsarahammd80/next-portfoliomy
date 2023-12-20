import React from 'react';
import './Expertise.css'


const Expertise = () => {

    return (
        <div className=' '>

            <section className='mx-5 xl:mx-28 md:mx-16 lg:mx-28 my-20 '>

                  <div className='text-2xl lg:text-3xl xl:text-3xl md:text-2xl'>
                      <h1 className='font-semibold my-5'>My Expertise</h1>
                  </div>

                  <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-4'>

                      <div className='expertiseCard shadow-sm border p-4 rounded'>
                          <div className='flex justify-center'>
                             <span className=''><i class="fa-solid fa-desktop text-5xl iconExpert"></i></span>
                          </div>
                          <div className='text-center'>
                             <h1 className='text-2xl font-medium my-4'>UserInterface</h1>
                             <p className=''>An Interface that is appealing to users and beautiful to behold using modern tools.</p>
                          </div>
                      </div>
                      <div className='expertiseCard shadow-sm border cursor-pointer p-4 rounded'>
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
                      </div>

                  </div>

            </section>

        </div>
    );
};

export default Expertise;