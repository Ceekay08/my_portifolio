"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,} from "react-icons/fa";
 import { SiTailwindcss, SiNextdotjs} from "react-icons/si";


 const about={
title:"About Me",
description: "I am a graduate student with a strong interest in software development and data analytics, I am actively seeking opportunities in this field to further advance my skills and knowledge. Prior to that, I gained valuable experience in IT Support and Systems Administration while working as an IT Assistant at Chinhoyi Provincial Hospital, a governmental organization implementing health programs nationwide. In this position, I provided first point of contact for IT support, installed and configured hardware and software, and managed the Helpdesk system. Additionally, I served as a Business Support Analyst at Zimbabwe United Passenger Company, where I resolved system problems and provided first-level support for business support systems.",
 
 info: [
{
    fieldName: "Name",
    fieldValue: "Knowledge Matambura",
},
{
  fieldName: "Experience",
  fieldValue: "2+ Years",
},{
  fieldName: "Skype",
  fieldValue: "Knowledge Matambura",
},
{
  fieldName: "Nationality",
  fieldValue: "Zimbabwean",
},
{
  fieldName: "Freelance",
  fieldValue: "Available",
},
{
  fieldName: "Email",
  fieldValue: "knowledgematambura68@gmail.com",
},
{
  fieldName: "Languages",
  fieldValue: "English and Shona",
},
{
  fieldName: "Marital Status",
  fieldValue: "Single",
},
 ],
};
 const experience ={
  icon:"/assets/resume/Badge.svg",
  title: " My Experience",
  description:"As the first point of contact for all Chinhoyi Provincial Hospital's staff, I provided comprehensive IT support, including installing and configuring computer hardware and software. I assisted staff and clients through various channels, resolving issues and ensuring smooth system setup. Troubleshooting technical problems, I logged incidents and service requests in the designated Helpdesk system, effectively managing tickets to maintain operational efficiency. I prioritized system and data security, promptly addressing hardware faults and software configuration problems by engaging relevant suppliers. Additionally, I monitored performance, provided technical assistance to project teams, and actively contributed to a culture of service excellence and continual improvement. Building strong relationships with key suppliers, I also assisted in policy development and change management. Prior to that, I gained valuable experience in Bussines Support Analyst, In this role, I provided first-level system support through the Business Support system, ensuring that queries were resolved according to established standards. I received and resolved business support system problems and computer environment issues, escalating unresolved problems to the second-level support when necessary. I administered the Help Desk system 24/7, documented problem-solving procedures, and updated the knowledge base. I received technical support calls and emails, resolving issues and escalating as needed. I monitored system uptime and reported on it, guided users on service requests, and tracked and routed problem resolutions. I analyzed Help Desk traffic and submitted reports with recommendations. Additionally, I updated software licenses and prepared user manuals, while also maintaining system checklists and running end-of-day processes on various systems and generating business reports.",
   items:[
    {
      company: "Chinhoyi Provincial Hospital",
      position: " IT Support and Systems Administration",
      duration: "2020-2021",
    },
    {
      company: "Zimbabwe United Passenger Company",
      position: "Business Support Analyst",
      duration: "2022",
    },
    {
      company: "Makoro Enterprises",
      position: "Business Support Analyst",
      duration: "2023",
    },
    {
      company: "ZETDC",
      position: "Front End Developer Intern",
      duration: "2020-2021",
    },
   ],
   
  }; 

  const education ={
    icon:"/assets/resume/Badge.svg",
    title: " My Education",
    description:"",
     items:[
      {
        institution: "Chinhoyi University of Technology",
        degree: "Bachelor of Science in Information Technology",
        duration: "2019-2022",
      },
      {
        institution: "HEXCO",
        degree: "Computer Operations and Packages ",
        duration: "2016",
      },
      {
        institution: "Online Course",
        degree: "Programming",
        duration: "Pending",
      },
      {
        institution: "Online Tech Institute",
        degree: "Cyber Security",
        duration: "Pending",
      },
     ], 
    }; 

    const skills={
      icon:"/assets/resume/Badge.svg",
      title: " My Skills",
      description:"Experience in Laravel, React, Django Framework etc. Experience with JQUERY, HTML, CSS, Linux Command Line, Apache. Experience in Developing REST APIs. Problem-solver with excellent troubleshooting skill. Reverse Engineering",
       skillslist:[
        {
          icon: <FaHtml5/>,
          name: "html5",
        },
        {
          icon: <FaCss3/>,
          name: "css 3",
        },
        {
          icon: <FaJs/>,
          name: "javascript",
        },
        {
          icon: <FaReact/>,
          name: "React.js",
        },
        {
          icon: <SiNextdotjs/>,
          name: "next.js",
        },
        {
          icon: <SiTailwindcss/>,
          name: "tailwind.css",
        },
        {
          icon: <FaNodeJs/>,
          name: "node.js",
        },
        {
          icon: <FaFigma/>,
          name: "figma",
        },
       ],
      };

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume  = () => {
  return (
    <motion.div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
     initial={{ opacity: 0}}
      animate={{ opacity: 1,
       transition:{delay:2, duration:0.4, ease: "easeIn"},}}>
      <div className="container mx-auto jetbrainsMono"> 
        <Tabs defaultValue="experience"
              className="flex flex-col xl:flex-row gap-[90px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-[8px] ">
              <TabsTrigger value="experience">Experience </TabsTrigger>
              <TabsTrigger value="education">Education </TabsTrigger>
              <TabsTrigger value="skills">Skills </TabsTrigger>
              <TabsTrigger value="about">About Me </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full ">
            <TabsContent value="experience"className="w-full">
               <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-3xl font-bold"> {experience.title}</h3>
                    <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{experience.description}</p>
               <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((items, index)=> {
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 text-white/60">
                        <span className="text-accent">{items.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{ items.position}</h3>
                        <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/20">{items.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
               </ScrollArea>
               </div>
            </TabsContent>
            <TabsContent value="education"className="w-full">
            <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-3xl font-bold"> {education.title}</h3>
                    <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{education.description}</p>
               <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((items, index)=> {
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 text-white/60">
                        <span className="text-accent">{items.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left" >{ items.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/20">{items.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
               </ScrollArea>
               </div>
            </TabsContent>
            {/**skills */}
            <TabsContent value="skills"className="w-full h-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold"> {skills.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0"> {skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3grid-cols-4 xl:gap-[30px] gap-3">
                { skills.skillslist.map((skill, index)=> {
                  return(
                   <li key={index} > 
                   <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[80px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-4xl group-hover:text-accent transition-all duration-300 text-white"> {skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                   </TooltipProvider>
                   </li>
                  )
                })}
              </ul>
            </div>
            </TabsContent>
            <TabsContent value="about" className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-3xl font-bold">
                    {about.title}
                  </h3>
                  <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{ about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index)=>{
                      return(
                        <li key={index} className="flex items-center justify-start gap-3">
                          <span className="text-black/60"> {item.fieldName}</span>
                          <span className="text-xl"> {item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
);
};

export default Resume 