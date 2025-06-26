import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function ProfileCard() {
  return (
    <div className="w-full flex justify-center items-center p-10">
      <div className="relative w-72 h-72 rounded-full group cursor-pointer">
        {/* Profile Image */}
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative">
          <img
            src="/images/sample.jpg" // Make sure this path is valid!
            alt="Profile"
            className="w-full h-full object-cover grayscale contrast-125"
          />

          {/* Social Icons - Slide Out on Group Hover */}
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="#"
              className="absolute left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-20 transition duration-500 text-white"
            >
              <FaInstagram className="text-2xl hover:scale-125 transition" />
            </a>
            <a
              href="#"
              className="absolute left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-20 transition duration-500 text-white"
            >
              <FaLinkedin className="text-2xl hover:scale-125 transition delay-100" />
            </a>
          </div>
        </div>

        {/* Name + Role */}
        <div className="text-center mt-4">
          <h3 className="text-xl font-bold">Yogarth</h3>
          <p className="text-sm text-gray-600">Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
}
