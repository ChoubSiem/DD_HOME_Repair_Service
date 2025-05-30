import React from 'react'
import { MdElectricalServices, MdOutlinePlumbing, MdRoofing } from "react-icons/md";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import image3 from "../../assets/image3.png";
import image from "../../assets/image.png";
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";




const Features = () => {
    return (
        <section>
            {/* Features section step1 */}
            <div className="p-3">
                <h1 className="font-bold text-2xl">Our Service Quality Reviews</h1>
                <hr class="border-gray-400 my-4" />
            </div>
            {/* Features section step1 */}

            {/* Features section step2 */}
            <div class="grid grid-cols-4 p-3 bg-white rounded-br-4xl relative">
                <div className="bg-white mr-19 rounded-xl shadow-md cursor-pointer hover:scale-105">
                    <img src={image3} alt="" className="h-80" />
                    <div className="p-3">
                        <div className="flex flex-row h-10 gap-30">
                            <p className="font-bold">Electrical Services</p>
                            <number className="mt-4">123</number>
                        </div>
                        <div className="flex flex-row gap-2">
                            <FaStar className="text-amber-500"/>
                            <FaStar className="text-amber-500"/>
                            <FaStar className="text-amber-500"/>
                            <FaStar className="text-amber-500"/>
                            <FaStar className="text-amber-500"/>
                            <p className="ml-35">Views</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white mr-19 rounded-xl shadow-md cursor-pointer hover:scale-105">
                    <img src={image} alt="" className="h-80" />
                    <div className="p-3">
                        <div className="flex flex-row h-10 gap-32">
                            <p className="font-bold">Electrical Services</p>
                            <number className="mt-4">15</number>
                        </div>
                        <div className="flex flex-row gap-2">
                            <FaStar className="text-amber-500"/>
                            <FaStar className="text-amber-500"/>
                            <FaStar className="text-amber-500"/>
                            <FaStar className="text-amber-500"/>
                            <FaStar />
                            <p className="ml-35">Views</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white mr-19 rounded-xl shadow-md cursor-pointer hover:scale-105">
                    <img src={image1} alt="" className="h-80" />
                    <div className="p-3">
                        <div className="flex flex-row  gap-32">
                            <p className="font-bold">Electrical Services</p>
                            <number className="mt-4">110</number>
                        </div>
                        <div className="flex flex-row gap-2">
                            <FaStar className="text-amber-500"/>
                            <FaStar className="text-amber-500"/>
                            <FaStar className="text-amber-500"/>
                            <FaStar />
                            <FaStar />
                            <p className="ml-35">Views</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white mr-19 rounded-xl shadow-md cursor-pointer hover:scale-105">
                    <img src={image2} alt="" className="h-80" />
                    <div className="p-3">
                        <div className="flex flex-row h-10 gap-32">
                            <p className="font-bold">Electrical Services</p>
                            <number className="mt-4">113</number>
                        </div>
                        <div className="flex flex-row gap-2">
                            <FaStar className="text-amber-500"/>
                            <FaStar className="text-amber-500"/>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <p className="ml-35">Views</p>
                        </div>
                    </div>
                </div>
                {/* Features section step2 */}
            </div>
        </section>
    )
}

export default Features
