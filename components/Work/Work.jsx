import React from 'react';
import './Work.css';


const projects = [
   {
      "id": 1,
      "img": "https://i.ibb.co/6vjwvp5/dream-learner-2.png",
      "name": "Dream Learner",
      "discription": "This project online course project. This project mack by React, Bootstrap, Node Js, Mongodb, Firebase,"
   },
   {
      "id": 2,
      "img": "https://i.ibb.co/8DvcPd3/motoro-2.png",
      "name": "Motoro Automotive",
      "discription": "Motoro Automotive car buy and sell website. This project mack by React, Bootstrap, Node Js, Mongodb, Firebase,"
   },
   {
      "id": 3,
      "img": "https://i.ibb.co/108xRLN/Quiz-2.png",
      "name": "Programing Quiz",
      "discription": "Programing Quiz online website. This project mack by React, Bootstrap, Node Js, Mongodb, Firebase,"
   },
   {
      "id": 4,
      "img": "https://i.ibb.co/t33nwz9/golden-gym-2.png",
      "name": "Pandda",
      "discription": "Panda e-commerce demo website. This project mack by HTML, CSS, Bootstrap"
   },
   {
      "id": 5,
      "img": "https://i.ibb.co/x56Xy64/Panda-2.png",
      "name": "Pandda",
      "discription": "Panda e-commerce demo website. This project mack by HTML, CSS, Bootstrap"
   },
   {
      "id": 6,
      "img": "https://i.ibb.co/6ypbv2V/proedu.png",
      "name": "Pandda",
      "discription": "Panda e-commerce demo website. This project mack by HTML, CSS, Bootstrap"
   },
]


const Work = () => {

    return (

        <div className=''>
           
            <section className='mx-5 lg:mx-24 md:mx-16 xl:mx-24'>

               <div>
                   <h1 className='text-3xl font-semibold text-white'>My Work</h1>
               </div>

               <div className=' grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-5 my-10'>

                  {
                     projects.map(project =>  <div key={project.id} class="card">
   
                     <div className='p-2 lg:p-5 xl:p-5 md:p-4'>
                       <h1 className='font-semibold text-lg icon'> <span className='expertName font-normal'>Project Name:</span> {project.name}</h1>
                       <p className='text-white my-1'>
                          Deram larnar project is onle course base project. 
                       </p>
                       <button class="sh_btn me-4 my-4">Source Code</button>
                       <button className='live-button'>Live Preview</button>
                    </div>
              
                    <div class="cover">
                    
                       {/* <div class="coverFront" >
                      
                          <div >
                                          
                          </div>
              
                       </div> */}
                       <div class="coverBack">
                          <img src={project.img} className='projectImg' alt="" />
                       </div>
              
                       </div>
                          </div>)
                  }


    
            
            </div>
            </section>
        </div>
    );
};

export default Work;