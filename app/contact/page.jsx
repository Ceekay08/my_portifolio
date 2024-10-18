"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {motion} from "framer-motion";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue, SelectTrigger }
 from "@/components/ui/select";
 import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
 import React, { useRef } from 'react';
 import emailjs from '@emailjs/browser';

 const info=[
{
  icon:<FaPhoneAlt/>,
  title: "Phone",
  description:"(+971 5818 41566)",
},
{
  icon:<FaEnvelope/>,
  title: "Email",
  description:"knowledgematambura68@gmail.com",
},
{
  icon:<FaMapMarkedAlt/>,
  title: "Address",
  description:"Dubai, United Arab Emirates",
},

 ]
const Contact = () => {
  
  return (
    <motion.section className="py-6"
    initial={{ opacity: 0}}
     animate={{ opacity: 1,
      transition:{delay:2, duration:0.4, ease: "easeIn"},}}
      >
        <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/**form */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form action="https://formsubmit.co/6d9cffc9ee317ad268d75e1c74397af2" method="POST"
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" >
              <h3 className="text-3xl text-accent">Lets Work Together</h3>
            <p className="text-white/60"> 
            “Coming together is a beginning, staying together is progress, and working together is success.” — Henry Ford 
            .Should you need any further information, please do not hesitate to contact me</p>
              
              {/**input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                <Input type="firstname" placeholder="Firstname" name="name" />
                <Input type="lastname" placeholder="Lastname" name="lname" />
                <Input type="email" placeholder="Email Adress" name="email" />
                <Input type="phone" placeholder="Phone Number" name="phone" />
              </div>
              {/**select */}
              <Textarea 
              className="h-[170px] text-white"
              placeholder="Type your message here" name="message"
              />
              <Button size="md" className="max-w-40" type="submit">Send Message</Button>
                 </form>
              
          </div>
          {/**info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                  {info.map((item, index)=>{
                    return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[32px] h-[32px] xl:w-[52px] xl:h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[19px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-black/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                 ) })}
                </ul>
              </div>
        </div>
          </div> 
    </motion.section>
  );
}
;
export default Contact;