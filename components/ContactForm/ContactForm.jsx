import React from 'react';
import './ContactForm.css';


const ContactForm = () => {

    return (
        <div>
 
            <section className='my-16 mx-28'>

                <div className='text-3xl font-semibold'>
                   <h1>Get In Touch</h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 my-10'>
                     
                     <form action="">
                         <div className="inputDiv my-3">
                            <input type="text" className='inputfild p-2' placeholder='Full Name' />
                         </div>
                         <div className="inputDiv my-3">
                            <input type="text" className='inputfild p-2' placeholder='Email Address' />
                         </div>
                         <div className="inputDiv my-3">
                            <input type="text" className='inputfild p-2' placeholder='Subject' />
                         </div>
                         <div className="inputDiv my-3">
                            <textarea name="" id="" className='w-full h-40 textfild p-2' placeholder='Massage'></textarea>
                         </div>
                     </form>

                     <div>
                         
                     </div>

                </div>

            </section>

        </div>
    );

};

export default ContactForm;