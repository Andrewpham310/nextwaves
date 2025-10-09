import React from 'react'
import Title from './Title'
import { testimonialData } from '../assets/assets'
import { motion } from "motion/react";

const Testimonial = () => {

    return (
        <motion.div
            id="testimonial"
            initial='hidden'
            whileInView='visible'

            viewport={{ once: true }}
            className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
            <Title title='What our clients say' desc='Hear from the businesses we helped transform their digital presence.' />

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {testimonialData.map((testimonial, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        key={index} className='flex flex-col p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400'>
                        <div className='flex items-center gap-4 mb-4'>
                            <img src={testimonial.image} className='w-12 h-12 rounded-full object-cover' alt={testimonial.name} />
                            <div className='flex-1'>
                                <h3 className='font-bold text-sm'>{testimonial.name}</h3>
                                <p className='text-sm opacity-60'>{testimonial.position}</p>
                                <p className='text-xs opacity-50'>{testimonial.company}</p>
                            </div>
                        </div>
                        <blockquote className='text-sm italic opacity-80 leading-relaxed'>
                            "{testimonial.testimonial}"
                        </blockquote>
                    </motion.div>
                ))}
            </div>

        </motion.div>
    )
}

export default Testimonial
