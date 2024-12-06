import React from 'react'

// Define the Props for the SectionHeading component
type SectionHeadingProps = {
  children: React.ReactNode
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h1 className="bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white font-bold text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">
      {children}
    </h1>
  )
}

export default SectionHeading
