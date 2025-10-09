import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react";

const OurWork = () => {
 
    const workData = [
        {
            title: 'Mobile App Development',
            desc: 'We create user-friendly mobile applications that provide seamless experiences across all devices.',
            img: assets.work_mobile_app
        },
        {
            title: 'Dashboard Management',
            desc: 'We help you excute your plan and deliver results that exceed your expectations.',
            img: assets.work_dashboard_management
        },
        {
            title: 'Fitness App',
            desc: 'We create user-friendly mobile applications that provide seamless experiences across all devices.',
            img: assets.work_fitness_app
        },
    ]

  return (
    <motion.div
     initial='hidden'
        whileInView='visible'
        transition={{duration: 0.6}}
        viewport={{staggerChildren:0.2}}
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <Title title='Our lastest work' desc='We take pride in our work and are committed to delivering exceptional results for our clients.'/>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl'>
           {workData.map((work, index)=>(
            <motion.div
             initial={{opacity: 0, y: 30}}
             whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index*0.2}}
            viewport={{once: true}}
            key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                <img src={work.img} className='w-full rounded-xl' alt=''/>
                <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                <p className='text-sm opacity-60 w-5/6'>{work.desc}</p>
            </motion.div>
           ))}           
        </div>
    </motion.div>
  )
}

export default OurWork