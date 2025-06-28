'use client'

import React from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { href: '#home', icon: 'home', label: 'Home' },
  { href: '#about', icon: 'account_circle', label: 'About' },
  { href: '#projects', icon: 'grid_view', label: 'Projects' },
  { href: '#contact', icon: 'call', label: 'Contact' },
]

interface HeaderNavMenuProps {
  theme?: string | null
}

const HeaderNavMenu: React.FC<HeaderNavMenuProps> = ({ theme }) => {
  return (
    <motion.main
      className="h-[50px] sm:h-[60px] border border-green-400 flex items-center justify-center gap-2 sm:gap-5 rounded-xl px-[5px]"
      {...(theme ? { 'data-theme': theme } : {})}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {navItems.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          className="px-1 sm:px-3 py-2 cursor-pointer rounded-[10px] flex items-center gap-1 hover:border hover:border-green-400 no-underline text-[15px]"
        >
          <span className="material-symbols-outlined">{icon}</span>
          {label}
        </a>
      ))}
    </motion.main>
  )
}

export default HeaderNavMenu
