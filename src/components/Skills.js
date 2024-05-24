import React from 'react'
import {motion} from "framer-motion"



const Skill = ({name, x, y})=>{
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold'
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        animate = {{x:x, y:y}}
        transition={{duration: 1.5}}
        viewport={{once:true}}>
          {name}
       </motion.div>

    )
}
const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-6xl mt-60 w-full text-center  md:text-6xl xs:text-4xl md:mb-16'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full
     bg-circularLight dark:bg-circularDark
     lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
     lg:bg-circularLightLg lg:dark:bg-circularDarkLg
     
     md:bg-circularLightLg md:dark:bg-circularDarkLg
     sm:bg-circularLightSm sm:dark:bg-circularDarkSm
     '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold
         bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark
         lg:p-6 md:p-4 xs:text-xs xs:p-2'
         whileHover={{scale:1.05}}>
            Web
        </motion.div>

<Skill name="CSS" x="-20vw" y="2vw"/>
<Skill name="HTML5" x="-5vw" y="-10vw"/>
<Skill name="JavaScript" x="20vw" y="6vw"/>
<Skill name="ReactJS" x="0vw" y="28vw"/>
<Skill name="Flutter" x="-20vw" y="-15vw"/>
<Skill name="AWS Cloud" x="15vw" y="-24vw"/>
<Skill name="WordPress" x="-20vw" y="-22vw"/>
<Skill name="Laravel" x="0vw" y="-20vw"/>
<Skill name="SEO & Security" x="0vw" y="18vw"/>
<Skill name="SQL & Firebase" x="30vw" y="-14vw"/>
<Skill name="Next Js" x="-35vw" y="-10vw"/>
<Skill name="OOP & Design" x="25vw" y="20vw"/>
<Skill name="App Dev." x="35vw" y="10vw"/>
<Skill name="Software Dev." x="-35vw" y="10vw"/>
<Skill name="UI/UX Design" x="-25vw" y="20vw"/>
<Skill name="Linux" x="0vw" y="10vw"/>




    </div>
    </>
  )
}

export default Skills
