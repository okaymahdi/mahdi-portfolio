import { BaseInfo } from '@/app/Data/data'
import React from 'react'
import { FaDownload } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className="w-full h-screen pt-[4vh] md:pt-[12vh] bg-tertiary overflow-hidden relative">
      <div className="w-4/5 h-full mx-auto flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
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
            <button className="flex items-center space-x-2 mt-8 btn__primary">
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>

          {/* Image Content */}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
