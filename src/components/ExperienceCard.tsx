import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from '../../typings'
import { urlFor } from '../../sanity'
type Props = {
    experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 
    hover:opacity-100 transition-opacity duration-250'>
        {experience?.companyImage ? (
            <motion.img
                initial={{ 
                    y: -100,
                    opacity: 0,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='w-16 h-16 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={urlFor(experience?.companyImage).url()}
                alt=''
            />
        ): null}

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2'>
                <div className='relative h-10 w-10'>
                    {experience.technologies.map((technology) => (
                        <div key={technology._id} >
                            {technology?.image ? (
                                <Image className='rounded-full' src={urlFor(technology?.image).url()} layout='fill' alt='js'/>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {' '}
                {experience.isCurrentlyWorkingHere 
                    ? 'Present'
                    : new Date(experience.dateEnded).toDateString()
                }
            </p>
            <ul className='space-y-4 list-disc ml-5 text-lg h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard