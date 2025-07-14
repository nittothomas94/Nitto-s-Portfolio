'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Heading = ({ text }: { text: string }) => (
  <h1 className="text-[45px] sm:text-[55px] lg:text-[65px] font-bold text-green-400">{text}</h1>
)

export default function AboutSection() {
  const openResumeInDrive = (): void => {
    window.open('https://drive.google.com/file/d/1HieIvYt8LshC0c1bLM3Iz0zUj6vFM1IQ/view', '_blank')
  }

  return (
    <motion.section
      id="about"
      className="w-full sm:w-[95%] md:w-[90%] lg:w-[928px] xl:w-[1250px] 2xl:w-[1500px] m-auto min-h-[80vh] px-[10px] mt-[20px] py-5 md:py-14 xl:pb-[60px] flex flex-col gap-[10px] sm:gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <Heading text="Overview" />

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Description */}
        <div className="text-white w-full md:leading-[3]">
          <p className="text-[12px] md:text-lg">
            I&apos;m a Passionate Developer Ready to Take On New Challenges skilled in building
            dynamic websites, user-friendly web apps with the{' '}
            <span className="text-green-400 font-medium">
              MERN stack (MongoDB, Express, React, Node.js)
            </span>
            . Driven by a love for clean code and intuitive design, I continuously learn and
            collaborate to create powerful, real-world applications.{' '}
            <span className="text-green-400 font-medium">
              Let&apos;s build something amazing together!
            </span>
          </p>

          {/* Resume Button */}
          <button
            onClick={openResumeInDrive}
            className="mt-10 md:mt-14 w-full md:w-[500px] h-10 rounded-2xl border border-white text-white hover:border-green-500 hover:scale-105 transition-all shadow-[0_0_100px_5px_#339757] flex items-center justify-center"
          >
            View Resume
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center items-start">
          <Image
            src="/images/Nitto-Image.webp"
            alt="Profile"
            width={200}
            height={250}
            className="rounded-tl-[10%] rounded-br-[10%] shadow-[0_0_100px_5px_#2f794a]"
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <motion.div
          className="w-full py-2 md:h-[200px] md:border border-green-900 rounded-lg flex flex-col items-center justify-center text-white text-sm hover:text-base transition-all text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>Eager to collaborate with teams across different time zones</p>
          <h2 className="text-lg font-semibold text-green-400 mt-2">
            Flexible with Global Communication
          </h2>
        </motion.div>

        <motion.div
          className="w-full pt-2 md:h-[200px] md:border border-green-900 rounded-lg flex flex-col items-center justify-center text-white text-sm hover:text-base transition-all text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>Always learning and improving.</p>
          <h2 className="text-lg font-semibold text-green-400 mt-2">My Tech Stack</h2>
        </motion.div>
      </div>
    </motion.section>
  )
}
