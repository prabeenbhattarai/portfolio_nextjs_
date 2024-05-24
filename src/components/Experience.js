import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'



const Details =({position, company, companyLink, time, address, work}) =>{
    const ref= useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]'>
       <LiIcon reference={ref} />
       
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75
            xs:text-sm'>
                {time} | {address}</span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            
        </motion.div>
    </li>
    );
}
const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-40'>
        <h2 className='font-bold text-6xl mb-32 w-full text-center
        md:text-6xl xs:text-4xl md:mb-16'>
Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]'/>
<ul className='w-full flex flex-col items-start justify-between ml-4
xs:ml-2'>
   <Details
   position="DevOps Engineer" company="Kohalpur Service Hub"
   time="2021-2022" address="Kohalpur, Banke, Nepal"
   companyLink="/"
   work="Worked as a DevOps Engineer, 
   I bridged the gap between development and operations by 
   automating and streamlining software development and deployment processes. 
   I ensured continuous integration and continuous delivery (CI/CD), 
   managed infrastructure as code, and monitored system performance to enhance
    reliability and scalability."
   
   />


<Details
   position="Marketing Manager" company="Kopila Suppliers"
   time="2023-present" address="Kawasoti, Nawalpur, Nepal"
   companyLink="/"
   work="I develop and execute comprehensive marketing strategies to 
   drive brand awareness and customer engagement. I oversee market research, 
   manage advertising campaigns, and coordinate with cross-functional teams to
    ensure consistent messaging across all channels. By analyzing market trends
    and performance metrics, I identify opportunities for growth and optimize 
    marketing efforts to achieve business objectives."
   
   />



</ul>
        </div>
     
    </div>
  )
}

export default Experience
