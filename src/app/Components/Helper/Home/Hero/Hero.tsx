import { BaseInfo } from '@/app/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className="w-full  py-[8vh] md:py-[14vh] bg-tertiary overflow-hidden relative">
      <div className="w-4/5 h-full mx-auto flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mt-10 ">
          {/* Text Contnt */}
          <div>
            {/* Sub Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
              I&#39;m {BaseInfo.name}
            </h1>

            {/* Title */}
            <h2 className="text__bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4.5rem] text-white">
              {BaseInfo.position}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base mt-6 text-white text-opacity-60 text-justify">
              {BaseInfo.description}
            </p>

            {/* CV Download Button */}

            <button className="flex items-center justify-center space-x-2 mt-8 mx-auto lg:mx-0 btn__primary">
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>

          {/* Image Content */}
          <div className="mx-auto  rounded-[3rem] border-[3.5px] border-indigo-600 overflow-x-hidden">
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
