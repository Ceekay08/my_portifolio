"use client";


import {motion} from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects=[
  {
    num: "01",
    catergory: "frontend",
    title: "project 1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit tempore, commodi nihil, error facilis ducimus quibusdam fuga iusto nemo voluptas, ipsa aut repellendus aperiam eligendi eaque eveniet expedita quia.",
    stack: [{name: "Html 5"},{name: "Css 3"},{name: "Javascript"}],
    image:'/assets/jena.jpg',
    live:"",
    github:"",
  },
  {
    num: "02",
    catergory: "frontend",
    title: "project 2",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit tempore, commodi nihil, error facilis ducimus quibusdam fuga iusto nemo voluptas, ipsa aut repellendus aperiam eligendi eaque eveniet expedita quia.",
    stack: [{name: "Html 5"},{name: "Css 3"},{name: "Javascript"}],
    image:'/assets/jena.jpg',
    live:"",
    github:"",
  },
  {
    num: "03",
    catergory: "fullstack",
    title: "project 3",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit tempore, commodi nihil, error facilis ducimus quibusdam fuga iusto nemo voluptas, ipsa aut repellendus aperiam eligendi eaque eveniet expedita quia.",
    stack: [{name: "Next.js"},{name: "Tailwind.css"},{name: "Node.js"}],
    image:'/assets/work/pj(2).jpg',
    live:"",
    github:"",
  }
];

const Work = () => {
  const [project, setProject]=useState(projects[0]);

  const handleSlideChange=(swiper)=>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity: 1}}
     className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 jetbrainsMono"> 
     <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-5xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
            <h2 className="text-[32px] font-bold leading-none text-black/60 group-hover:text-blue-300 transition-all duration-500 capitalize">{project.catergory} project</h2>
          <p className="text-black/60" > { project.description}</p>
          <ul className="flex gap-4">
            {project.stack.map((item, index)=>{
              return <li key={index} className="text-xl text-accent"> 
              {item.name}
              {/**remove the last  */}
              {index !== project.stack.length - 1 && ","}</li>
            })}
          </ul>
          <div className="border border-black/20"></div>
          <div className="flex items-center gap-4">
            <Link href={project.live}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/25 flex justify-center items-center group">
                  <BsArrowUpRight className="text-black text-3xl group-hover:text-blue-300"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live Project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>
            <Link href={project.github}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/25 flex justify-center items-center group">
                  <BsGithub className="text-black text-3xl group-hover:text-accent"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>
          </div>
          </div>
        </div>
        <div className="w-full">
        <Swiper spaceBetween={30}
        slidesPerView={1}
        className="xl:h-[520px] mb-12"
        onSlideChange={handleSlideChange}>
            {projects.map((project, index)=>{
              return(
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] w-[960px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full"> </div>
                    <div className="relative w-full h-full">
                      <div className="relative w-full h-full" >

                      </div>
                      <Image src={project.image} fill className="object-cover" alt=""/>
                    </div>
                  </div>
                  
               </SwiperSlide>
              );  
            })}

            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"/>
              </Swiper>
          </div>
      </div>
     </div>
     </motion.section>
  );
};

export default Work;