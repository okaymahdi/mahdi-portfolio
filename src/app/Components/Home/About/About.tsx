import { aboutInfo } from '@/app/Data/data'
import SectionHeading from '../../Helper/SectionHeading'
import { FaCheck } from 'react-icons/fa6'

const About = () => {
  return (
    <div className="py-16 bg-quaternary">
      {/* Heading Section Component */}
      <SectionHeading>About Me</SectionHeading>

      {/* Main Section */}
      <section className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Contnt */}
        <div>
          <h1 className="text__bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="text-base text-gray-500 mt-6">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-700">
                <div className="flex flex-col items-center justify-center">
                  <FaCheck className="text-white" />
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Front-End Developer
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
