import React from 'react';
import './About.css';



const About = () => {
    return (
        <div>
             
             <section className='mx-5 lg:mx-24 xl:mx-24 my-16'>

                  <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>

                      <div className='hidden lg:block xl:block flex justify-center items-center mx-5 lg:mx-28 xl:mx-28 md:mx-10'>
                          <div className='aboutIamgeDiv'> 
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnmYrFIP1VtBj4mUkHl5uRCSKT1ye7qDLZQ&usqp=CAU" className='heroImg' alt="" />
                          </div>
                      </div>

                      <div className='flex justify-start items-center'>

                           <div className=''>

                                <h1 className='text-3xl font-semibold mb-5'>About Me</h1>
                                <p>Hi, I am a MERN stack Developer. I am an expert in Rect JS, Express JS, Mongo DB, javascript, Node js, css3, responsiveness and other essential tools.</p>

                                <p className='my-5'>I love to Develop interesting and unique design. I also like to challenge myself to learn new things And I crave for new experiences And Challenges.</p>

                           </div>

                      </div>

                  </div>

             </section>

        </div>
    );
};

export default About;