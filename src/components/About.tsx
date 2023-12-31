import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'
type Props = {
    pageInfo: PageInfo
}

function About({pageInfo}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl text-center md:absolute md:top-24'>
            About
        </h3>

        
            <motion.div
            initial={{
                x:-200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            
            className='relative mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]'
            >
                <Image className='object-cover' src={urlFor(pageInfo?.profilePic).url()} layout='fill' alt={pageInfo?.name} />
            </motion.div>
        

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
                background
            </h4>
            <p className='text-base'>
                {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}

export default About