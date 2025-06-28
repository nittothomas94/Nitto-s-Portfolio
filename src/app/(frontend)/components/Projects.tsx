// import React from 'react'

// const ProjectsSection = () => {
//   return <div className="w-full h-screen bg-white text-black">ProjectsSection</div>
// }

// export default ProjectsSection

'use client'

import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'E-Commerce',
    description: 'Fully Responsive Site, Next.js, javaScript, Tailwind css Design From Figma',
    image: '/images/ecommerce.png',
    liveLink: '#',
    sourceLink: '#',
    videoLink: '#',
  },
  {
    title: 'Fully Responsive Sustainable Mindz Clone',
    description:
      'Landing page built with Next.js, Tailwind CSS, and modern development practices, Figma layout',
    image: '/images/mindz.png',
    liveLink: '#',
    sourceLink: '#',
    videoLink: '#',
  },
  {
    title: 'Nexcent',
    description: 'Developed A Clone of Nexcent A Well Structured Code Project',
    image: '/images/nexcent.png',
    liveLink: '#',
    sourceLink: '#',
    videoLink: '#',
  },
  {
    title: 'Todo2',
    description: 'Project using MERN stack and JWT authentication',
    image: '/images/todo.png',
    liveLink: '#',
    sourceLink: '#',
    videoLink: '#',
  },
  {
    title: 'Task Management',
    description: 'Fullstack app with drag & drop UI and real-time features',
    image: '/images/task.png',
    liveLink: '#',
    sourceLink: '#',
    videoLink: '#',
  },
  {
    title: 'Wood Palace',
    description: 'Furniture eCommerce site built from Figma',
    image: '/images/wood.png',
    liveLink: '#',
    sourceLink: '#',
    videoLink: '#',
  },
]

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-[#010314] text-white">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#30f285] mb-12">
        MY PROJECTS
      </h2>
      <div className="grid grid-cols-1 gap-8 px-4 md:px-12 lg:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-[#30f285]/20 bg-[#0a0e1a] p-6 rounded-md shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="w-full h-48 relative mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={project.liveLink}
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 text-sm font-semibold"
              >
                View Live Site
              </a>
              <a
                href={project.sourceLink}
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 text-sm font-semibold"
              >
                View Source Code
              </a>
              <a
                href={project.videoLink}
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 text-sm font-semibold"
              >
                Watch a video
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
