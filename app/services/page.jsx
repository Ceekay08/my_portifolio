"use client"
 import Link from "next/link"
import {BsArrowDownRight} from "react-icons/bs";

const services=[
{
  num:'01',
  title: 'Software development',
  description:'IT services I can ofter include software development processes to create custom applications that fulfill specific business needs. For example, a startup business may rely on my service team to create a software application for organizing and maintaining venture capitalist records. In these cases, I can provide the services you need to develop personalized software and ensure the programs viability through continuous testing, development and maintenance.',
  href:""
  
} ,
{
  num:'02',
  title: 'Troubleshooting and technical support',
  description:'Other services i can offer also include technical support and troubleshooting for software applications and programs. I offer these services often guide users through the process of resolving technical errors or recommend further steps to take, such as sending in the device for repairs. With a dedicated technical support service, your organization can receive the technical assistance it needs when staff members have questions or challenges when using company software.',
  href:""
  
},
{
  num:'03',
  title: 'Monitoring',
  description:'IT services can monitor your network, internet traffic, computers and other internet-enabled devices. Monitoring allows me to keep track of who accesses their businesses information, whether any technology requires repairs and if any computers need software updates or modifications. Essentially, this IT service ensures that your team members have the tools and resources they need to complete their tasks.',
  href:""
  
},
{
  num:'04',
  title: 'Voice over internet protocol (VoIP)',
  description:'Voice over internet protocol is a communication tool for businesses. VoIP allows team members to make calls and send messages through their internet connections instead of through a phone line. This helps with internal long-distance communication for businesses that may have offices in different locations. Most VoIP services require paid subscriptions, which businesses can use with traditional phone services or as an alternative.',
  href:""
  
},
{
  num:'05',
  title: ' Network security',
  description:'Network security services help protect a business network from unauthorized access. IT services can create and issue access authorization to those who need it. They also provide many other services to protect your network, including, Building firewalls, Installing anti-virus software, Installing virtual private networks (VPNs), Performing regular network checkups',
  href:""
  
},
{
  num:'06',
  title: 'Backup solutions',
  description:'Backup solutions protect information loss from occurring by storing copies of data on external hardware or online platforms, such as a cloud service. Information backup services can help protect your business information should any issues occur, like a power outage or system failure. Many information backup services exist, such as file backup, server backup and even desktop backup. Businesses can schedule automatic backups for their files to save the most recent versions of the files they create to ensure data is secure',
  href:""
  
}
];
import {motion} from "framer-motion";


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
<div className="container mx-auto jetbrainsMono"> 
<motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay:2, duration:0.4, ease: "easeIn"}}className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
{services.map((service, index)=>{
            return (
                <div key={index} className="flex-1 flex flex-col justify center gap-6 group"><div>
                  <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">{ service.num} </div>
                <Link href={service.href}
                className="w-[70px] h-[70px] rounded-full bg-black group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-white text-3xl"/>
                </Link>
                </div>
                </div>
                <h2 className="text-[26px] font-bold leading-none group-hover: text-accent transition-all duration-500 text-black">
                  {service.title}
                </h2>
                <p className="text-black/60">{ service.description}</p>
                <div className="border-b border-black/20 w-full "></div>
                </div>
            );})}
        </motion.div>
        </div>
    </section>
    
  )
}

export default Services