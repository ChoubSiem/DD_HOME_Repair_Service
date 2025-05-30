import React from 'react'
import img from "../../assets/repair.jpg";
import { IoMdReorder } from "react-icons/io";
import { FcAcceptDatabase } from "react-icons/fc";
import { IoTimer } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Hero = () => {
    return (
        <section>
            {/* Hero section step1 */}
            <div className="flex flex-row p-7 bg-blue-100">
                {/* content section */}
                <div className="flex flex-col space-y-2 basis-1/3 pl-2 cursor-pointer">
                    <h1 className="font-bold">Service Categories</h1>
                    <a href="#" className="navHover">Electrical Services</a>
                    <a href="#" className="navHover">Plumbing Services</a>
                    <a href="#" className="navHover">Electronic Services</a>
                    <a href="#" className="navHover">Roofing Services</a>
                </div>
                {/* img section */}
                <div className="basis-2/3">
                    <iframe className="aspect-video size-10/12" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
                </div>
            </div>
            {/* Hero section step1 */}

            {/* Hero section step2 */}
            <div className="rounded-tl-4xl -mt-7 bg-white">
                <div className="flex flex-row">
                    <div className="basis-2/3 mt-10">
                        <img src={img} alt="" className="rounded-md" />
                    </div>
                    <div className="flex items-center justify-center h-screen basis-1/3 animate-pulse">
                        <h1 className="text-center text-2xl font-black">Image Description</h1>
                    </div>
                </div>
                {/* Hero section step2 */}

                {/* Hero section step3 */}
                <div className="p-3">
                    <h1 className="font-bold text-2xl">Our Service Processes</h1>
                    <hr class="border-gray-400 my-4" />
                </div>
                {/* Hero section step3 */}

                {/* Hero section step4 */}
                <div className="p-3 grid grid-cols-3  gap-6 ">
                    <div className="grid grid-flow-col justify-start">
                        <IoMdReorder className="size-15 -mt-2 row-span-6 text-green-800 cursor-pointer hover:text-shadow-md hover:scale-105" />
                        <h1 className="font-bold col-span-2">Order</h1>
                        <p>Customer makes order.</p>
                    </div>

                    <div className="grid grid-flow-col justify-start gap-1">
                        <FcAcceptDatabase className="size-12 row-span-6 text-green-800 cursor-pointer hover:text-shadow-md hover:scale-105" />
                        <h1 className="font-bold col-span-2">Accept the order</h1>
                        <p>The service provider accepts
                            the customer order.
                        </p>
                    </div>

                    <div className="grid grid-flow-col justify-start gap-1">
                        <IoTimer className="size-12 row-span-6 text-green-800 cursor-pointer hover:text-shadow-md hover:scale-105" />
                        <h1 className="font-bold col-span-2">Make appointment</h1>
                        <p>Service provider makes appointment with customer online.</p>
                    </div>

                    <div className="grid grid-flow-col justify-start gap-1">
                        <GrServices className="size-12 row-span-6 text-green-800 cursor-pointer hover:text-shadow-md hover:scale-105" />
                        <h1 className="font-bold col-span-2">Start service</h1>
                        <p>The service provider starts delivering service to customer.</p>
                    </div>

                    <div className="grid grid-flow-col justify-start gap-1">
                        <IoShieldCheckmarkOutline className="size-12 row-span-6 text-green-800 cursor-pointer hover:text-shadow-md hover:scale-105" />
                        <h1 className="font-bold col-span-2">Final inspection</h1>
                        <p>Our QC officer checks completed job and processes payment with customer.</p>
                    </div>
                </div>
            </div>
            {/* Hero section step4 */}
        </section>
    );
};

export default Hero
