import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import POS from "../../public/images/projects/pos.png";
import PB from "../../public/images/projects/pb.png";
import Khas from "../../public/images/projects/khas.png";
import NTS from "../../public/images/projects/nts.png"; 
import Gyan from "../../public/images/projects/gyan.png"; 

import {motion} from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, github}) =>{
  return (
    <article className='w-full flex items-center justify-between
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
      xs:-right-2 xs:h-[102%] sm:w-full xs:rounded-[1.5rem] "/>

      <Link href={link}
       target="_blank" 
      className='w-1/2 cursor-pointer overflow-hiddden rounded-lg lg:w-full'>
        <FramerImage src={img} alt={title} className='w-full h-auto rounded-lg '
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
 <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
       </Link>
       <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
       <div className='mt-2 flex items-center'>
       <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
       <Link href={link} target="_blank" className='ml-4
        rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
        sm:px-4 sm:text-base'>View Project </Link>


       </div>
      </div>
    </article>

  )
}

const  Project = ({title, type, img, link, github}) =>{
  return (

    <article className='w-full flex  flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className="absolute top-0 -left-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
       bg-dark rounded-br-3xl dark:bg-light md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>

 <Link href={link} target="_blank" 
      className='w-full cursor-pointer overflow-hiddden rounded-lg '>
          <FramerImage src={img} alt={title} className='w-full h-auto '
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target="_blank" 
        className='hover:underline underline-offset-2'>
 <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
       </Link>
       <div className='w-full mt-2 flex items-center justify-between'>
       <Link href={link} target="_blank" className='
         text-lg font-semibold underline md:text-base'>View Project </Link>
       <Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon /> </Link>
      


       </div>
      </div>
    </article>
  )
}
const profile = () => {
  return (

    <>
    <Head>
        <title>Portfolio : Prabeen Bhattarai : Projects Page</title>
        <meta name="description" content="Prabeen Bhattarai Full stack Developer"/>
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="The best way to predict the future is to invent it." className='text-center
            mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
              <div className='col-span-12'>
 



<FeaturedProject
 title="PB-Sports : Live Streaming Application"
 img={PB}
 github="https://github.com/prabeenbhattarai/nextjs_pbsports_front"
 summary="Elevate your sports viewing experience with PB Sports, 
 powered by Next.js. Stream live cricket and football matches, 
 relish highlights, all with real-time updates. Seamlessly access with OAuth 
 login for hassle-free enjoyment on any device."
  link="https://www.pbsports.net/"
  type="Featured Project" />
               </div>
              <div className='col-span-6 sm:col-span-12'>
              <Project
 title="KhasKuro : News Portal"
 img={Khas}
 github="https://github.com/prabeenbhattarai/"
 
  link="https://www.khaskuro.com/"
  type="WordPress Website" />
              </div>
              <div className='col-span-6 sm:col-span-12'>
              <Project
 title="NTS : Tech Website"
 img={NTS}
 github="https://github.com/prabeenbhattarai/"
 
  link="https://www.ntstech.com.np/"
  type="Product Catalog Website" />
              </div>
              
              
              <div className='col-span-12'>
              <FeaturedProject
 title="POS Inventory System"
 img={POS}
 github="https://github.com/prabeenbhattarai/"
 summary="Experience seamless retail management with 
  Laravel-based POS Inventory System. Effortlessly handle transactions,
   online payments, invoices, payroll, recruitment, and balance sheets
    for comprehensive business control."
  link="https://www.pb-sports.net/"
  type="Software Development" />
              </div>
     <div className='col-span-12'>
              <FeaturedProject
 title="Gyan Bahumukhi Educational Website"
 img={Gyan}
 github="https://github.com/prabeenbhattarai/"
 summary="Experience streamlined education management with Gyan Bahumukhi Campus, an advanced PHP and MongoDB-based platform. Easily manage student records, online admissions, course materials, faculty data, and performance tracking, providing a comprehensive solution for modern educational institutions."
  link="https://gyanbahumukhicampus.edu.np/"
  type="Website Development" />
              </div>
              <div className='col-span-6'>
              
              </div>
              <div className='col-span-6'>
               
              </div>

            </div>
        </Layout>
    </main>
    
    </>
  )
}

export default profile
