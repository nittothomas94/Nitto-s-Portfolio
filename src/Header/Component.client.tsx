'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = () => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="z-20 w-full h-[50px] border border-green-400 mt-[25px] mx-auto sticky top-[10px] flex items-center justify-center gap-5 rounded-xl px-10"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <a
        href="#home"
        className="px-3 py-2 cursor-pointer rounded-[10px] flex items-center gap-1 hover:border hover:border-green-400 no-underline"
      >
        <span className="material-symbols-outlined">home</span>
        Home
      </a>
      <a
        href="#about"
        className="px-3 py-2 cursor-pointer rounded-[10px] flex items-center gap-1 hover:border hover:border-green-400 no-underline"
      >
        <span className="material-symbols-outlined">account_circle</span>
        About
      </a>
      <a
        href="#projects"
        className="px-3 py-2 cursor-pointer rounded-[10px] flex items-center gap-1 hover:border hover:border-green-400 no-underline"
      >
        <span className="material-symbols-outlined">grid_view</span>
        Projects
      </a>
      <a
        href="#contact"
        className="px-3 py-2 cursor-pointer rounded-[10px] flex items-center gap-1 hover:border hover:border-green-400 no-underline"
      >
        <span className="material-symbols-outlined">call</span>
        Contact
      </a>
    </header>
  )
}
