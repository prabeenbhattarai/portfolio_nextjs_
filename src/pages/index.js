import Head from 'next/head'
import Layout from '@/components/Layout'
import Profile from "../../public/images/profile/file.png";
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import Laptop from "../../public/images/profile/laptop.svg";
import TransitionEffect from '@/components/TransitionEffect';



export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio : Prabeen Bhattarai</title>
        <meta name="description" content="Prabeen Bhattarai : Full Stack Developer Netx js, WordPress, PHP, Flutter and more.." />
      
      </Head>
      <TransitionEffect />
      <main className='flex items-center text0dark w-full min-h-screen dark:text-light'>
   
   <Layout className='pt-0 md:pt-16 sm:pt-8'>
  <div className='flex items-center justify-between w-full lg:flex-col'>
    <div className='w-1/2 md:w-full '>
      <Image src={Profile} alt="Prabeen Bhattarai" className='w-full h-auto lg:hidden md:inline-block md:w-full'/>

     
    </div>
    <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
      
      <AnimatedText text="Bringing Creative Visions to Life with Code and Design." className='!text-left
      xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
      <p className='my-4 text-base font-medium md:text-sm sm:text-xs'> 
      As a passionate programmer, I specialize in turning innovative visions into reality through seamless code and thoughtful design. With a keen eye for detail and a commitment to excellence, I transform complex ideas into engaging and functional digital experiences.</p>
      <div className='flex items-center self-start mt-2 lg:self-center'>
      <Link href="/images/profile/CV_PRABEEN.pdf" target={"_blank"}
      className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
      hover:bg-light hover:text-dark border-2 
      border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
      md:p-2 md:px-4 md:text-base' download={true}>Resume 
      <LinkArrow className={"w-6 ml-1"}/></Link>  
      <Link href="mailto:prabeenbhattarai7450@gmail.com?cc=info@bhattarai-prabin.com.np&subject=Regarding Project Discussion [From Site:Bhattarai-Prabin.com.np]" target={"_blank"}
      className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact</Link>

      </div>
    </div>
    
  </div>
    </Layout>
    <HireMe/>
    <div className='absolute left-20 top-20 inline-block w-40 md:hidden dark:hidden '>
      <Image src={Laptop} alt="prabeen" className='w-full h-auto'/>
    </div>
   
    
      </main>
    </>
  )
}
