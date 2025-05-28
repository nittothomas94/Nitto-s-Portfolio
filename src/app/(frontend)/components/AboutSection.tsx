'use client'

import Image from 'next/image'

const Heading = ({ text }: { text: string }) => (
  <h1 className="text-[60px] font-bold text-green-400">{text}</h1>
)

export default function AboutSection() {
  const openResumeInDrive = (): void => {
    window.open('https://drive.google.com/file/d/1HieIvYt8LshC0c1bLM3Iz0zUj6vFM1IQ/view', '_blank')
  }

  return (
    <section
      id="about"
      className="w-full min-h-[80vh] px-6 md:px-28 py-14 flex flex-col gap-10 animate-fadeIn"
    >
      {/* Heading */}
      <Heading text="Overview" />

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Description */}
        <div className="text-white leading-[3]">
          <p className="text-lg">
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
            className="mt-10 w-full max-w-[400px] h-10 rounded-lg border border-white text-white hover:border-green-500 hover:scale-105 transition-all shadow-[0_0_100px_5px_#339757]"
          >
            View Resume
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center items-start">
          <Image
            src="/images/Nitto-Image.jpg"
            alt="Profile"
            width={280}
            height={350}
            className="rounded-tl-[30%] rounded-br-[30%] shadow-[0_0_100px_5px_#2f794a]"
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="w-full h-[200px] border border-green-900 rounded-lg flex flex-col items-center justify-center text-white text-sm hover:text-base transition-all text-center">
          <p>Eager to collaborate with teams across different time zones</p>
          <h2 className="text-lg font-semibold text-green-400 mt-2">
            Flexible with Global Communication
          </h2>
        </div>
        <div className="w-full h-[200px] border border-green-900 rounded-lg flex flex-col items-center justify-center text-white text-sm hover:text-base transition-all text-center">
          <p>Always learning and improving.</p>
          <h2 className="text-lg font-semibold text-green-400 mt-2">My Tech Stack</h2>
        </div>
      </div>
    </section>
  )
}
