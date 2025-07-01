'use client'

import React from 'react'
import { Skeleton } from 'antd'
import { FaGithub } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import { TfiWorld } from 'react-icons/tfi'

const CardSkeleton = () => {
  return (
    <div className="xl:h-[380px] border border-[#30f285]/20 bg-[#0a0e1a] p-6 rounded-[10px] shadow-md hover:shadow-lg transition flex flex-col justify-between">
      <Skeleton.Input
        active
        style={{
          width: '100%',
          height: 14,
          borderRadius: 4,
          backgroundColor: '#ffffff20',
        }}
      />
      <Skeleton.Input
        active
        style={{
          width: '90%',
          height: 14,
          borderRadius: 4,
          backgroundColor: '#ffffff20',
        }}
      />

      <Skeleton.Image
        active
        style={{
          width: '100%',
          height: 150,
          borderRadius: 8,
        }}
      />

      <div className="flex items-center gap-[20px] mt-4">
        <div className="border border-white size-[26px] opacity-50 rounded-[10px]"></div>
        <div className="border border-white size-[26px] opacity-50 rounded-[10px]"></div>
        <div className="border border-white size-[26px] opacity-50 rounded-[10px]"></div>
      </div>
    </div>
  )
}

export default CardSkeleton
