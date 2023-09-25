import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import MeMyselfImage from '../../public/images/me.jpg'
import Link from 'next/link'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'
type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, I'm ${pageInfo?.name}`, 
            "aka Yeleke", 
            "() => 'Enjoy!'"
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        {pageInfo?.heroImage ? (
            <div className='relative h-32 w-32 mx-auto'>
                <Image
                className='rounded-full'
                src={urlFor(pageInfo.heroImage).url()}
                layout='fill'
                objectFit='cover'
                priority
                alt='me'
                />
            </div>
        ) : null}
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#skils'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>

        
    </div>
  )
}

export default Hero