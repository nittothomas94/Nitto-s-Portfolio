'use client'

import { ChangeEvent } from 'react'

type InputProps = {
  type?: string
  label: string
  id?: string
  className?: string
  multiline?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Input = ({
  type = 'text',
  label,
  id,
  className = '',
  multiline = false,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="text-white text-sm font-medium">
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          rows={6}
          className={`resize-none rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          className={`rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
          onChange={onChange}
        />
      )}
    </div>
  )
}

export default Input
