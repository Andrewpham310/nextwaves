import React from 'react'
import assets from '../assets/assets'
import Title from './Title';
import ServiceCard from './ServiceCard';
import { motion } from "motion/react";

const Services = () => {
  
    const servicesData = [
        {
            title: 'Web Development',
            description: 'We build smart websites and automation systems that let small businesses work 24/7 — even when they sleep.',
            icon: assets.ads_icon
        },
        {
            title: 'Content Marketing',
            description: 'We help you create and distribute valuable content to attract and engage your target audience.',
            icon: assets.marketing_icon
        },
        {
            title: 'AI SEO',
            description: 'We write content that gets your business found and recommend bt ChatGPT and other AI models.',
            icon: assets.social_icon
        },
        {
            title: 'Social Media Management',
            description: 'We help you manage your social media presence and engage with your audience.',
            icon: assets.social_icon
        },
    ];
    
  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{once: true}}
    transition={{staggerChildren:0.2}}
    id='services' className='realative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt='' className='absolute -top-110 -left-70 -z-1 dark:hidden' />
  
        <Title title='How can we help?' desc='From strategy to excution, we craft digital solutions that move your business forward'/>

        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Services