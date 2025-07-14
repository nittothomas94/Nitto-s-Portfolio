'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { TfiWorld } from 'react-icons/tfi'
import { FaYoutube } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import CardSkeleton from './CardSkeleton'

type Project = {
  id: string
  title: string
  description: string
  image?: {
    url: string
  }
  liveLink?: string
  sourceLink?: string
  videoLink?: string
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects')
        setProjects(response.data.docs)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section className="w-full sm:w-[95%] md:w-[90%] lg:w-[928px] xl:w-[1250px] 2xl:w-[1500px] px-[10px] m-auto mt-[40px]  py-16 bg-[#010314] text-white">
      <h2 className="text-center text-[38px] md:text-5xl font-bold text-[#30f285] mb-12">
        MY PROJECTS
      </h2>

      {loading ? (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <CardSkeleton key={idx} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 2xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-[#30f285]/20 bg-[#0a0e1a] p-6 rounded-[10px] shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-[22px] md:text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[12px] text-gray-300 mb-4">{project.description}</p>
              <div className="w-full h-48 relative mb-4">
                {project.image?.url && (
                  <Image
                    src={project.image.url}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover rounded-md"
                  />
                )}
              </div>
              <div className="flex items-center gap-[20px] h-fit w-full">
                {project.liveLink && (
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <TfiWorld className="text-blue-400 size-[24px] hover:text-blue-600 hover:scale-150" />
                  </Link>
                )}
                {project.sourceLink && (
                  <Link href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="size-[24px]" />
                  </Link>
                )}
                {project.videoLink && (
                  <Link href={project.videoLink} target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-[#ff3021] size-[28px]" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
