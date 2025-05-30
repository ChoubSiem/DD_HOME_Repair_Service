import React from 'react'
import { FaFacebookF, FaYoutube, } from 'react-icons/fa'
import { MdOutlineMarkEmailUnread, MdOutlineLocalPhone } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import logo from "../../assets/Logo/logo.jpg";


const Footer = () => {
    return (
        <footer className="bg-green-500 text-gray-800 py-10 px-4 sm:px-10 mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="Logo" className="w-32 mb-4" />
                    <p className="text-sm text-gray-600 text-center md:text-left">Your trusted service partner since.</p>
                </div>

                {/* Contact Section */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                    <p className="mb-2">DD Home</p>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-700 hover:text-red-500">
                            <MdOutlineMarkEmailUnread className="text-black" />
                            <a href="mailto:dd.home81@gmail.com">dd.home81@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 hover:text-red-500">
                            <MdOutlineLocalPhone className="text-blue-500" />
                            <a href="tel:015444504">015444504 / 078448888</a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 hover:text-red-500">
                            <AiOutlineGlobal className="text-black" />
                            <a href="#">dd.home81@gmail.com.kh</a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 hover:text-red-500">
                            <SlSocialFacebook className="text-blue-900" />
                            <a href="https://www.facebook.com/ddhome2017/" target="_blank" rel="noopener noreferrer">Facebook Page</a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 hover:text-red-500">
                            <FaYoutube className="text-red-500" />
                            <a href="https://www.youtube.com/@-ddhome6465" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Our Services</h2>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li><a href="#" className="hover:text-red-500">Electrical Services</a></li>
                        <li><a href="#" className="hover:text-red-500">Plumbing Services</a></li>
                        <li><a href="#" className="hover:text-red-500">Masonry Services</a></li>
                        <li><a href="#" className="hover:text-red-500">Electronic Services</a></li>
                        <li><a href="#" className="hover:text-red-500">Roofing Services</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
                © 2025 <a href="#" className="text-green-600 hover:text-red-500">DD Home</a>. All rights reserved.
            </div>
        </footer>

    )
}

export default Footer
