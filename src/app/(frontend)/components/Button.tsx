'use client'

import { MouseEventHandler } from 'react'

type ButtonProps = {
  text: string
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ text, className = '', onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
