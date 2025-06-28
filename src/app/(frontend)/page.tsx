import React from 'react'
import VerticalLineLeft from './components/VerticalLineLeft'
import VerticalLineRight from './components/VerticalLineRight'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/Projects'
import ContactSection from './components/ContactSection'

const Home = () => {
  return (
    <main className="w-full">
      <VerticalLineLeft />
      <section>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </section>
      <VerticalLineRight />
    </main>
  )
}

export default Home
