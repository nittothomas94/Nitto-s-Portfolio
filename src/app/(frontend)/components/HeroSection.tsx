'use client'

import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import Link from 'next/link'

const socialLinks = [
  {
    href: 'https://github.com/nittothomas94',
    icon: 'fa-brands fa-github',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/nittothomas/',
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:nittothomas94@gmail.com?subject=Hello Nitto&body=Hello Nitto',
    icon: 'fa-solid fa-envelope',
    label: 'Email',
  },
  {
    href: '/pdf/Nitto Thomas Mern Stack Developer.pdf',
    label: 'Resume',
    icon: 'fa-solid fa-file',
    download: 'Nitto_Thomas-Full_Stack_Developer.pdf',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut', // ✅ Type-safe easing
    },
  },
}

export default function HeroSection() {
  return (
    <div className="w-full xl:w-[1220px] 2xl:w-[1500px] 2xl:pl-[50px] m-auto md:min-h-[55vh] lg:h-[70vh] xl:h-[75vh] py-10 flex flex-col gap-10 lg:gap-14 md:mt-5 lg:mt-10 xl:mt-[80px]">
      {/* Typewriter Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[50px] font-bold text-green-400 leading-tight">
        <Typewriter
          options={{
            strings: ["Hi I'm,"],
            autoStart: true,
            loop: true,
            delay: 120,
            deleteSpeed: 100000,
          }}
        />
      </h1>

      {/* Name with animation */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[100px] font-[600] text-[#dbdbdb] opacity-0 animate-dropIn -mt-4 sm:-mt-6 xl:mt-[8px]">
        Nitto Thomas
      </h1>

      {/* Caption */}
      <p className="text-lg sm:text-xl md:text-[20px] lg:text-[20px] xl:text-[22px] leading-relaxed text-white">
        <span className="text-green-400">Fullstack Developer based in India </span>
        Crafting User-Centric <span className="text-green-400">Experiences</span>, <br />
        Crafting sleek high-performance websites focusing on clean code and user experience.
      </p>

      {/* Social / Connect Me */}
      <motion.div
        className="grid grid-cols-2 md:flex gap-4 sm:gap-6 xl:mt-5"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {socialLinks.map((link, index) => (
          <motion.div key={index} variants={itemVariants}>
            {link.download ? (
              <a
                href={link.href}
                download={link.download}
                className="px-4 py-2 border border-white rounded-xl cursor-pointer no-underline hover:scale-110 hover:border-green-400 transition-all duration-300 flex items-center gap-2"
              >
                <i className={`${link.icon} text-green-400`} />
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white rounded-xl cursor-pointer no-underline hover:scale-110 hover:border-green-400 transition-all duration-300 flex items-center gap-2"
              >
                <i className={`${link.icon} text-green-400`} />
                {link.label}
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
