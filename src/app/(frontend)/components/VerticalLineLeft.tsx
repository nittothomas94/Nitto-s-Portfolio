'use client'

import React, { MouseEvent } from 'react'

const VerticalLineLeft: React.FC = () => {
  const handleMailClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=nittothomas94@gmail.com', '_self')
  }

  return (
    <div className="hidden lg:flex fixed lg:left-5 xl:left-10 top-5 z-[200] flex-col items-center gap-2 font-poppins text-green-500">
      {/* Vertical Line */}
      <div className="w-px h-[40vh] bg-gray-400/50" />

      {/* Vertical Email Text */}
      <a
        href="mailto:nittothomas94@gmail.com"
        onClick={handleMailClick}
        className="text-xs hover:text-green-300 cursor-pointer"
        style={{ writingMode: 'vertical-lr' }}
      >
        nittothomas94@gmail.com
      </a>
    </div>
  )
}

export default VerticalLineLeft
