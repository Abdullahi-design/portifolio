import React from 'react'
import Image from 'next/image'
import Abdullahi from '../public/Images/me.jpeg'
import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto h-screen'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        >
            <Image className='-mb-20 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]' src={Abdullahi} width={500} height={500} alt="" />
        </motion.div>
    </div>
  )
}

export default About