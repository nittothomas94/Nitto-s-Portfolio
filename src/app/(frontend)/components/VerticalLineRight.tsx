'use client'

import React from 'react'

const VerticalLineRight: React.FC = () => {
  return (
    <div className="hidden lg:flex fixed right-10 bottom-10 z-[200] flex-col items-center font-poppins">
      {/* Vertical Line */}
      <div className="w-px h-[15vh] bg-gray-400/50 relative">
        {/* Icon Group */}
        <div className="absolute -top-[140px] -left-2 flex  flex-col items-center gap-3 text-[16px]">
          <a href="https://github.com/nittothomas94" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github text-green-500 hover:text-green-300 cursor-pointer" />
          </a>
          <a href="tel:9446979075">
            <i className="fa-solid fa-phone text-green-500 hover:text-green-300 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/nittothomas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-green-500 hover:text-green-300 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/nittothomas__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-instagram text-green-500 hover:text-green-300 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default VerticalLineRight
