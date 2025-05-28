'use client'

import Typewriter from 'typewriter-effect'
import './HomeSection.css' // We'll define custom animation here

export default function HomeSection() {
  return (
    <div className="min-h-[85vh] w-full px-6 md:px-20 py-10 flex flex-col gap-10" id="home">
      {/* Typewriter Heading */}
      <h1 className="text-[60px] font-bold text-green-400">
        <Typewriter
          options={{
            strings: ["Hi I'm ,"],
            autoStart: true,
            loop: true,
            delay: 120,
            deleteSpeed: 100000,
          }}
        />
      </h1>

      {/* Name with animation */}
      <h1 className="text-[110px] font-bold text-white mt-[-30px] opacity-0 animate-dropIn">
        Nitto Thomas
      </h1>

      {/* Caption */}
      <p className="text-[30px] leading-[1.7] text-white mt-2">
        <span className="text-green-400">Fullstack Developer based in India </span>
        Crafting User Centric <span className="text-green-400">Experiences</span>, <br />
        Crafting sleek high-performance websites focusing on clean code and user experience.
      </p>

      {/* Social / Connect Me */}
      <div className="flex gap-6 flex-wrap">
        <a
          href="https://github.com/nittothomas94"
          className="px-4 py-2 border border-white rounded-lg cursor-pointer no-underline hover:scale-110 hover:border-green-400 transition-all duration-400 flex items-center gap-2"
        >
          <i className="fa-brands fa-github text-green-400"></i>
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/nittothomas/"
          className="px-4 py-2 border border-white rounded-lg cursor-pointer no-underline hover:scale-110 hover:border-green-400 transition-all duration-400 flex items-center gap-2"
        >
          <i className="fa-brands fa-linkedin text-green-400"></i>
          LinkedIn
        </a>

        <a
          href="mailto:nittothomas94@gmail.com?subject=Hello Nitto&body=Hello Nitto"
          className="px-4 py-2 border border-white rounded-lg cursor-pointer no-underline hover:scale-110 hover:border-green-400 transition-all duration-400 flex items-center gap-2"
        >
          <i className="fa-solid fa-envelope text-green-400"></i>
          Email
        </a>

        <a
          href="/pdf/Nitto Thomas Mern Stack Developer.pdf"
          download="Nitto_Thomas-Full_Stack_Developer.pdf"
          className="px-4 py-2 border border-white rounded-lg cursor-pointer no-underline hover:scale-110 hover:border-green-400 transition-all duration-400 flex items-center gap-2"
        >
          <i className="fa-solid fa-file text-green-400"></i>
          Resume
        </a>
      </div>
    </div>
  )
}
