import React from 'react';
import './ContactForm.css';


const ContactForm = () => {

    return (
        <div>
 
            <section className='my-10 lg:my-16 mx-5 lg:mx-28 xl:mx-28 md:mx-16'>

                <div className='text-3xl font-semibold'>
                   <h1 className='text-white'>Get In Touch</h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 my-5 lg:my-10 gap-4'>
                     
                     <form action="" className='formdiv'>
                         <div className="inputDiv my-3">
                            <input type="text" className='inputfild p-2' placeholder='Full Name' />
                         </div>
                         <div className="inputDiv my-3">
                            <input type="text" className='inputfild p-2' placeholder='Email Address' />
                         </div>
                         <div className="inputDiv my-3">
                            <input type="text" className='inputfild p-2' placeholder='Subject' />
                         </div>
                         <div className="textDiv my-3">
                            <textarea name="" id="" className='w-full h-40 textfild p-2' placeholder='Message'></textarea>
                         </div>
                         <button className='contactButton my-2 font-semibold'>Send Message</button>
                     </form>

                     <div className='mx-0 lg:mx-16 flex items-center'>
 
                        <div className='w-full'>
                         <div className='border contactDiv p-3 flex items-center w-full my-3'>
                            <span className='contactIcon ms-1 me-2 lg:ms-5 lg:me-5'><i class="fa-solid fa-envelope"></i></span>
                            <span className='text-sm lg:text-xl p-1 contactText'>kowsarahammed80@gmail.com</span>
                          </div>
                         <div className='border contactDiv p-3 flex items-center w-full my-3'>
                            <span className='contactIcon ms-1 lg:ms-5 md:ms-0 me-2 lg:me-5 md:me-2'><i class="fa-solid fa-phone"></i></span>
                            <span className='text-sm lg:text-xl p-1 contactText'>+8801760075031</span>
                          </div>
                         <div className='border contactDiv p-3 flex items-center w-full'>
                            <span className='contactIcon ms-1 lg:ms-5 md:ms-0 me-2 lg:me-5'><i class="fa-solid fa-location-dot"></i></span>
                            <span className='text-md lg:text-xl contactText'>Johirul Islam City Aftab Nagar, Badda, Dhakka-1212</span>
                          </div>
                        </div>

                     </div>

                </div>

            </section>

        </div>
    );

};

export default ContactForm;