import React from 'react'
import image3 from "../../assets/image3.png";
import image from "../../assets/image.png";
import image7 from "../../assets/image7.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image8 from "../../assets/image8.png";
import video from "../../assets/videos.mp4";
import { motion } from "framer-motion";
import { MdBorderColor } from "react-icons/md";
import { FcAcceptDatabase } from "react-icons/fc";
import { IoTimer } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import image9 from "../../assets/image9.png"
import image10 from "../../assets/image10.png"
import image11 from "../../assets/image11.png"
import { GrCompliance } from "react-icons/gr";




const Hero = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-lg font-bold sm:text-left mb-4">Our Main Services</h1>
        <hr className="w-full border-t-1 border-gray-800 mb-8 mx-auto sm:mx-0" />

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Electrical Services</h2>
            </div>
            <img
              src={image3}
              alt="Electrical Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Electrical Services...</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Plumbing Services</h2>
            </div>
            <img
              src={image}
              alt="Plumbing Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Plumbing Services...</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Electronic Services</h2>
            </div>
            <img
              src={image7}
              alt="Electronic Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Electronic Services...</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Electronic Services</h2>
            </div>
            <img
              src={image1}
              alt="Electronic Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Electronic Services...</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Electronic Services</h2>
            </div>
            <img
              src={image2}
              alt="Electronic Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Electronic Services...</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Electronic Services</h2>
            </div>
            <img
              src={image8}
              alt="Electronic Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Electronic Services...</p>
            </div>
          </div>
        </div>

        {/* videos  */}
        <div class="py-4">
          <h2 class="text-lg font-semibold mb-2">Video</h2>
          <hr className="w-full border-t-1 border-gray-800 mb-8 mx-auto sm:mx-0" />
          <div class="grid grid-cols-2 gap-4">
            {/* Video Section */}
            <div className="rounded overflow-hidden shadow border">
              <video
                autoPlay
                muted
                loop
                controls
                className="w-full h-full object-cover"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Description Section with animation */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded overflow-hidden animate-pulse flex items-center justify-center bg-white p-6"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl font-bold"
              >
                Description
              </motion.h3>
            </motion.div>
          </div>
        </div>
        {/* videos  */}

        {/* Processes Repair Service */}
        <div className="py-4">
          <h2 className="text-2xl font-bold mb-4">Our Service Processes</h2>
          <hr className="w-full mb-10 mx-auto" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step Item */}
            <div className="bg-white rounded-2xl border border-gray-300 p-6 flex items-start gap-4">
              <MdBorderColor className="text-4xl text-green-500 hover:text-red-800 transition-transform duration-200 hover:scale-110" />
              <div>
                <h3 className="text-lg font-semibold mb-1">1. Order</h3>
                <p className="text-gray-600 text-sm">Customer makes order.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-300 p-6 flex items-start gap-4 transition-all">
              <FcAcceptDatabase className="text-4xl hover:text-red-800 transition-transform duration-200 hover:scale-110" />
              <div>
                <h3 className="text-lg font-semibold mb-1">2. Accept the order</h3>
                <p className="text-gray-600 text-sm">The service provider accepts the customer order.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-300 p-6 flex items-start gap-4 transition-all">
              <IoTimer className="text-4xl text-green-500 hover:text-red-800 transition-transform duration-200 hover:scale-110" />
              <div>
                <h3 className="text-lg font-semibold mb-1">3. Make appointment</h3>
                <p className="text-gray-600 text-sm">Service provider makes appointment with customer online.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-300 p-6 flex items-start gap-4 transition-all">
              <GrServices className="text-4xl text-green-500 hover:text-red-800 transition-transform duration-200 hover:scale-110" />
              <div>
                <h3 className="text-lg font-semibold mb-1">4. Start service</h3>
                <p className="text-gray-600 text-sm">The service provider starts delivering service to customer.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-300 p-6 flex items-start gap-4 transition-all">
              <IoShieldCheckmarkOutline className="text-4xl text-green-500 hover:text-red-800 transition-transform duration-200 hover:scale-110" />
              <div>
                <h3 className="text-lg font-semibold mb-1">5. Confirm Completion</h3>
                <p className="text-gray-600 text-sm">Customer confirms service is complete.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Processes Repair Service */}

        {/* Card item start */}
        <div className="py-4">
          <h2 className="text-lg font-semibold mb-2">Our Export Technicians</h2>
          <hr className="w-full border-t border-gray-800 mb-8 mx-auto sm:mx-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-300 hover:shadow-xl cursor-pointer">
              <img src={image9} alt="" className="w-full h-48 object-cover" />
              <h1 className="text-center text-2xl font-semibold mt-4">Premium Services</h1>
              <div className="p-3">
                <div className="flex pt-7 text-yellow-500 text-xl gap-2">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <div className="flex flex-col items-end -mt-12 justify-center text-lg font-semibold">
                  <p className="text-lg mr-4">15</p>
                  <p>Views</p>
                </div>
                <hr className="my-3" />
                <textarea
                  className="p-2 w-full bg-white shadow rounded-sm border border-gray-300 text-gray-700"
                  defaultValue="Description"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-300 hover:shadow-xl cursor-pointer">
              <img src={image10} alt="" className="w-full h-48 object-cover" />
              <h1 className="text-center text-2xl font-semibold mt-4">Premium Services</h1>
              <div className="p-3">
                <div className="flex pt-7 text-yellow-500 text-xl gap-2">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <div className="flex flex-col items-end -mt-12 justify-center text-lg font-semibold">
                  <p className="text-lg mr-4">15</p>
                  <p>Views</p>
                </div>
                <hr className="my-3" />
                <textarea
                  className="p-2 w-full bg-white shadow rounded-sm border border-gray-300 text-gray-700"
                  defaultValue="Description"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-300 hover:shadow-xl cursor-pointer">
              <img src={image11} alt="" className="w-full h-48 object-cover" />
              <h1 className="text-center text-2xl font-semibold mt-4">Premium Services</h1>
              <div className="p-3">
                <div className="flex pt-7 text-yellow-500 text-xl gap-2">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <div className="flex flex-col items-end -mt-12 justify-center text-lg font-semibold">
                  <p className="text-lg mr-4">15</p>
                  <p>Views</p>
                </div>
                <hr className="my-3" />
                <textarea
                  className="p-2 w-full bg-white shadow rounded-sm border border-gray-300 text-gray-700"
                  defaultValue="Description"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Card item end */}

        {/* Card item start  */}
        <div className="py-4">
          <h2 className="text-lg font-semibold mb-2">Projects Completed</h2>
          <hr className="w-full border-t border-gray-800 mb-8 mx-auto sm:mx-0" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {/* Card 1 */}
            <div className="border border-gray-300 rounded-2xl  p-6 flex flex-col items-center justify-center transition-transform duration-300">
              <GrCompliance className="text-5xl mb-4" />
              <h1 className="text-3xl font-extrabold mb-1">4+</h1>
              <p className="text-center text-sm font-medium opacity-90">Premium Projects Completed</p>
            </div>
            {/* Card 1 */}
            <div className="border border-gray-300 rounded-2xl  p-6 flex flex-col items-center justify-center transition-transform duration-300">
              <GrCompliance className="text-5xl mb-4" />
              <h1 className="text-3xl font-extrabold mb-1">5+</h1>
              <p className="text-center text-sm font-medium opacity-90">Professional Projects Completed</p>
            </div>
            {/* Card 1 */}
            <div className="border border-gray-300 rounded-2xl  p-6 flex flex-col items-center justify-center transition-transform duration-300">
              <GrCompliance className="text-5xl mb-4" />
              <h1 className="text-3xl font-extrabold mb-1">6+</h1>
              <p className="text-center text-sm font-medium opacity-90">Standard Projects Completed</p>
            </div>
          </div>
        </div>
        {/* Card item end  */}
      </div>
    </section>
  )
}

export default Hero
