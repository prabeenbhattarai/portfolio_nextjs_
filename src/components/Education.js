import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'



const Details =({type, time, place, info}) =>{
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
                {type}
                </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}</span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            
        </motion.div>
    </li>
    );
}
const Education = () => {
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
Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top  dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]' />
<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
  
                 <Details
   type="Master in Information and Communication Technology"
   time="2024-Present"
   place="Western Sydney University (WSU), Sydney, Australia"
   info="Graduate program focused on advanced knowledge and skills in computing, networking, data management, and emerging technologies to solve complex technological challenges."
   
   />
                
                
                
                <Details
   type="Bachelor of Engineering in IT"
   time="2017-2022"
   place="Nepal College of Information Technology (NCIT) "
   info="Relevent courses included Engineering, Data & Design with Advanced Programming Language, Artificial Intelligence, Machine Learning, Database, Data Structures & Algorithm."
   
   />


<Details
   type="Intermediate of Science"
   time="2015-2017"
   place="Modern Public Secondary School"
   info="Relevant courses included Physics, Chemistry, Mathematics, Biology, Computer Science, and Environmental Science, providing a strong foundation in scientific principles and analytical skills essential for further studies in science and technology fields."
   
   />



</ul>
        </div>
     
    </div>
  )
}

export default Education
