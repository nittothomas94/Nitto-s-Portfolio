'use client'

import Typewriter from 'typewriter-effect'
import './HomeSection.css'

export default function HomeSection() {
  return (
    <div
      className="md:min-h-[55vh] lg:min-h-[58vh] w-full px-3 sm:px-7 lg:px-[100px] xl:px-[110px] py-10 flex flex-col gap-10 lg:gap-14 md:mt-5 lg:mt-10"
      id="home"
    >
      {/* Typewriter Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-green-400 leading-tight">
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
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-white opacity-0 animate-dropIn -mt-4 sm:-mt-6">
        Nitto Thomas
      </h1>

      {/* Caption */}
      <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white">
        <span className="text-green-400">Fullstack Developer based in India </span>
        Crafting User-Centric <span className="text-green-400">Experiences</span>, <br />
        Crafting sleek high-performance websites focusing on clean code and user experience.
      </p>

      {/* Social / Connect Me */}
      <div className="grid grid-cols-2 md:flex gap-4 sm:gap-6 xl:mt-5">
        <a
          href="https://github.com/nittothomas94"
          className="px-4 py-2 border border-white rounded-xl cursor-pointer no-underline hover:scale-110 hover:border-green-400 transition-all duration-300 flex items-center gap-2"
        >
          <i className="fa-brands fa-github text-green-400"></i>
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/nittothomas/"
          className="px-4 py-2 border border-white rounded-xl cursor-pointer no-underline hover:scale-110 hover:border-green-400 transition-all duration-300 flex items-center gap-2"
        >
          <i className="fa-brands fa-linkedin text-green-400"></i>
          LinkedIn
        </a>

        <a
          href="mailto:nittothomas94@gmail.com?subject=Hello Nitto&body=Hello Nitto"
          className="px-4 py-2 border border-white rounded-xl cursor-pointer no-underline hover:scale-110 hover:border-green-400 transition-all duration-300 flex items-center gap-2"
        >
          <i className="fa-solid fa-envelope text-green-400"></i>
          Email
        </a>

        <a
          href="/pdf/Nitto Thomas Mern Stack Developer.pdf"
          download="Nitto_Thomas-Full_Stack_Developer.pdf"
          className="px-4 py-2 border border-white rounded-xl cursor-pointer no-underline hover:scale-110 hover:border-green-400 transition-all duration-300 flex items-center gap-2"
        >
          <i className="fa-solid fa-file text-green-400"></i>
          Resume
        </a>
      </div>
    </div>
  )
}
