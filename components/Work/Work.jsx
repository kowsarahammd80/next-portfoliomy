"use client";

import React, { useState } from "react";
import "./Work.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const allProjects = [

  {
    id: 10,
    img: "https://i.ibb.co.com/Rpyz60TH/Screenshot-2025-04-05-195010.png",
    name: "Watheta",
    discription:
      "This project is Watheta company websitean this is project right now on going for developmet. This project mack by Next Js, Tailwindcss, Node Js, Express JS, Mongodb and Bkash or Paystation for payment",
    liveLink: "https://watheta.netlify.app/",
    // code: "https://github.com/kowsarahammd80/edTech-website",
  },
  {
    id: 12,
    img: "https://i.ibb.co.com/84z27fBP/Screenshot-2025-04-05-195617.png",
    name: "Review QR",
    discription:
      "This project is oline qr reivew. This project mack by Vite & React JS , Tailwindcss, Node Js, Express JS, Mongodb and Bkash or Paystation for payment",
    liveLink: "http://reviewqr.xyz/",
    // code: "https://github.com/kowsarahammd80/edTech-website",
  },
  {
    id: 13,
    img: "https://i.ibb.co.com/B5dTG9Bg/Screenshot-2025-04-05-202650.png",
    name: "Review QR",
    discription:
      "This project is E-commerce website. This project mack by Next Js, Bootstrap, Node Js, Express JS, Mongodb",
    liveLink: "https://www.bookmark.com.bd/",
    // code: "https://github.com/kowsarahammd80/edTech-website",
  },

  {
    id: 1,
    img: "https://i.ibb.co/6vjwvp5/dream-learner-2.png",
    name: "Dream Learner",
    discription:
      "This project online course project. This project mack by React, Bootstrap, Node Js, Mongodb, Firebase,",
    liveLink: "https://incandescent-malasada-d90989.netlify.app/home",
    code: "https://github.com/kowsarahammd80/assignment-10",
  },
  {
    id: 2,
    img: "https://i.ibb.co/8DvcPd3/motoro-2.png",
    name: "Motoro Automotive",
    discription:
      "Motoro Automotive car buy and sell website. This project mack by React, Bootstrap, Node Js, Mongodb, Firebase,",
    liveLink: "https://mellow-pithivier-6e0dff.netlify.app/",
    code: "https://github.com/kowsarahammd80/car-sell-buy-client",
  },
  {
    id: 3,
    img: "https://i.ibb.co/108xRLN/Quiz-2.png",
    name: "Programing Quiz",
    discription:
      "Programing Quiz online website. This project mack by React, Bootstrap, Node Js, Mongodb, Firebase,",
    liveLink: "https://wonderful-crisp-27b4e7.netlify.app/",
    code: "https://github.com/kowsarahammd80/quiz-react-router",
  },
  {
    id: 4,
    img: "https://i.ibb.co/t33nwz9/golden-gym-2.png",
    name: "Golden Gym activity website",
    discription:
      "Panda e-commerce demo website. This project mack by HTML, CSS, Bootstrap",
    liveLink: "https://cheerful-cassata-122fa5.netlify.app/",
    code: "https://github.com/kowsarahammd80/golden-gym-react",
  },
  {
    id: 5,
    img: "https://i.ibb.co/x56Xy64/Panda-2.png",
    name: "Pandda",
    discription:
      "Panda e-commerce demo website. This project mack by HTML, CSS, Bootstrap",
    liveLink: "https://kowsarahammd80.github.io/panda-commerce-web/#subscribe",
    code: "https://github.com/kowsarahammd80/panda-commerce-web",
  },
  {
    id: 6,
    img: "https://i.ibb.co/6ypbv2V/proedu.png",
    name: "Pandda",
    discription:
      "Panda e-commerce demo website. This project mack by HTML, CSS, Bootstrap",
    liveLink: "https://starlit-cranachan-119a31.netlify.app/",
    code: "https://github.com/kowsarahammd80/edTech-website",
  },

]

const projects = [
  
  {
    id: 1,
    img: "https://i.ibb.co/6vjwvp5/dream-learner-2.png",
    name: "Dream Learner",
    discription:
      "This project online course project. This project mack by React, Bootstrap, Node Js, Mongodb, Firebase,",
    liveLink: "https://incandescent-malasada-d90989.netlify.app/home",
    code: "https://github.com/kowsarahammd80/assignment-10",
  },
  {
    id: 2,
    img: "https://i.ibb.co/8DvcPd3/motoro-2.png",
    name: "Motoro Automotive",
    discription:
      "Motoro Automotive car buy and sell website. This project mack by React, Bootstrap, Node Js, Mongodb, Firebase,",
    liveLink: "https://mellow-pithivier-6e0dff.netlify.app/",
    code: "https://github.com/kowsarahammd80/car-sell-buy-client",
  },
  {
    id: 3,
    img: "https://i.ibb.co/108xRLN/Quiz-2.png",
    name: "Programing Quiz",
    discription:
      "Programing Quiz online website. This project mack by React, Bootstrap, Node Js, Mongodb, Firebase,",
    liveLink: "https://wonderful-crisp-27b4e7.netlify.app/",
    code: "https://github.com/kowsarahammd80/quiz-react-router",
  },
  {
    id: 4,
    img: "https://i.ibb.co/t33nwz9/golden-gym-2.png",
    name: "Golden Gym activity website",
    discription:
      "Panda e-commerce demo website. This project mack by HTML, CSS, Bootstrap",
    liveLink: "https://cheerful-cassata-122fa5.netlify.app/",
    code: "https://github.com/kowsarahammd80/golden-gym-react",
  },
  {
    id: 5,
    img: "https://i.ibb.co/x56Xy64/Panda-2.png",
    name: "Pandda",
    discription:
      "Panda e-commerce demo website. This project mack by HTML, CSS, Bootstrap",
    liveLink: "https://kowsarahammd80.github.io/panda-commerce-web/#subscribe",
    code: "https://github.com/kowsarahammd80/panda-commerce-web",
  },
  {
    id: 6,
    img: "https://i.ibb.co/6ypbv2V/proedu.png",
    name: "Pandda",
    discription:
      "Panda e-commerce demo website. This project mack by HTML, CSS, Bootstrap",
    liveLink: "https://starlit-cranachan-119a31.netlify.app/",
    code: "https://github.com/kowsarahammd80/edTech-website",
  },
];

const liveProject = [
  {
    id: 1,
    img: "https://i.ibb.co.com/Rpyz60TH/Screenshot-2025-04-05-195010.png",
    name: "Watheta",
    discription:
      "This project is Watheta company websitean this is project right now on going for developmet. This project mack by Next Js, Tailwindcss, Node Js, Express JS, Mongodb and Bkash or Paystation for payment",
    liveLink: "https://watheta.netlify.app/",
    // code: "https://github.com/kowsarahammd80/edTech-website",
  },
  {
    id: 2,
    img: "https://i.ibb.co.com/84z27fBP/Screenshot-2025-04-05-195617.png",
    name: "Review QR",
    discription:
      "This project is oline qr reivew. This project mack by Vite & React JS , Tailwindcss, Node Js, Express JS, Mongodb and Bkash or Paystation for payment",
    liveLink: "http://reviewqr.xyz/",
    // code: "https://github.com/kowsarahammd80/edTech-website",
  },
  {
    id: 13,
    img: "https://i.ibb.co.com/B5dTG9Bg/Screenshot-2025-04-05-202650.png",
    name: "Review QR",
    discription:
      "This project is E-commerce website. This project mack by Next Js, Bootstrap, Node Js, Express JS, Mongodb",
    liveLink: "https://www.bookmark.com.bd/",
    // code: "https://github.com/kowsarahammd80/edTech-website",
  },
];


const Work = () => {

  const [button, setButton] = useState('all')

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="expertiseBG" id="projects">
      <section className="mx-5 lg:mx-24 md:mx-16 xl:mx-24 py-16">
        <div>
          <h1
            className="pb-5 lg:pb-10 xl:pb-10 text-2xl lg:text-5xl xl:text-5xl font-semibold aboutMeText"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            My Work
          </h1>
        </div>

        <div className="flex justify-center">
          <div>
            <button onClick={() => setButton('all')} className={`ms-2 px-7 py-2 border rounded-full font-semibold  ${button === 'all' ? "buttonActive text-white font-semibold border-2" : "border-violet-500 text-violet-500"}`}>All</button>
            <button onClick={() => setButton('client')} className={`ms-2 px-7 py-2 border rounded-full font-semibold  ${button === 'client' ? "buttonActive text-white font-semibold border-2" : "border-violet-500 text-violet-500"}`}>Client</button>
            <button onClick={() => setButton('personal')} className={`ms-2 px-7 py-2 rounded-full font-semibold border  ${button === 'personal' ? "text-white font-semibold border-2 buttonActive" : "border-violet-500 text-violet-500"}`}>Personal</button>
          </div>
        </div>

        {
          button === 'all' && <div className=" grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-10 my-10">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="card"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="100"
              data-aos-duration="1000"
            >
              <div className="p-2 lg:p-5 xl:p-5 md:p-4">
                <h1 className="font-semibold text-lg icon">
                  {" "}
                  <span className="text-black font-normal">
                    Project Name:
                  </span>{" "}
                  {project.name}
                </h1>
                <p className="my-1">{project.discription}</p>

          {
            project.code &&<a href={project.code}>
            <button class="downloadCVButton me-4 my-4 px-5 py-1 rounded-full">
              Source Code
            </button>
          </a>
          }
                

                <a href={project.liveLink}>
                  <button className="downloadCVButton px-5 py-1 rounded-full">
                    Live Preview
                  </button>
                </a>
              </div>

              <div class="cover">
                
                <div class="coverBack">
                  <img src={project.img} className="projectImg" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        }
           
           {
            button === 'personal' && <div className=" grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-10 my-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <div className="p-2 lg:p-5 xl:p-5 md:p-4">
                  <h1 className="font-semibold text-lg icon">
                    {" "}
                    <span className="text-black font-normal">
                      Project Name:
                    </span>{" "}
                    {project.name}
                  </h1>
                  <p className="my-1">{project.discription}</p>
  
                  <a href={project.code}>
                    <button class="downloadCVButton me-4 my-4 px-5 py-1 rounded-full">
                      Source Code
                    </button>
                  </a>
  
                  <a href={project.liveLink}>
                    <button className="downloadCVButton px-5 py-1 rounded-full">
                      Live Preview
                    </button>
                  </a>
                </div>
  
                <div class="cover">
                  
                  <div class="coverBack">
                    <img src={project.img} className="projectImg" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
           }

        
        {
          button === 'client' && <div className=" grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-10 my-10">
          {liveProject.map((project) => (
            <div
              key={project.id}
              className="card"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="100"
              data-aos-duration="1000"
            >
              <div className="p-2 lg:p-5 xl:p-5 md:p-4">
                <h1 className="font-semibold text-lg icon">
                  {" "}
                  <span className="text-black font-normal">
                    Project Name:
                  </span>{" "}
                  {project.name}
                </h1>
                <p className="my-1">{project.discription}</p>

                {/* <a href={project.code}>
                  <button class="downloadCVButton me-4 my-4 px-5 py-1 rounded-full">
                    Source Code
                  </button>
                </a> */}

                <a href={project.liveLink}>
                  <button className="downloadCVButton px-5 py-1 rounded-full">
                    Live Preview
                  </button>
                </a>
              </div>

              <div class="cover">
                
                <div class="coverBack">
                  <img src={project.img} className="projectImg" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        }
        
      </section>
    </div>
  );
};

export default Work;
