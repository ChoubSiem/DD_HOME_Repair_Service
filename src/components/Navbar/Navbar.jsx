'use client'
import React, { useState } from 'react';
import img from "../../assets/img.jpg";
import ខ្មែរ from "../../assets/kh.png";
import en from "../../assets/en.png";
import { AiOutlineSearch } from 'react-icons/ai';
import { words } from '../../lib/data';
const Navbar = () => {

  const [activeSearch, setActiveSearch] = useState([])

  const handleSearch = (e) => {
    if (e.target.value == '') {
      setActiveSearch([])
      return false
    }
    setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0, 8))
  }
  return (
    <header className="flex flex-row justify-between items-center px-5 py-5 lg:px-14 md:px-10 bg-blue-100">
      {/* Logo section */}
      <div className="flex flex-row gap-6 mt-12 cursor-pointer">
        <span className="font-bold">logo</span>
        {/* nav section */}
        <nav className="hidden md:flex flex-row gap-6">
          <a href="/home" className="navHover">Home</a>
          <a href="/about" className="navHover">About us</a>
          <a href="/register" className="navHover">Register</a>
        </nav>
      </div>
      {/* icons */}
      <div className="hidden lg:flex gap-5 text-center">
        <span className="w-[500px] relative">
          <div className="relative hover:scale-105">
            <input type="Search" placeholder="Search" className="w-full p-3 px-2 rounded-full bg-white size-10" onChange={(e) => handleSearch(e)} />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1 bg-white rounded-full">
              <AiOutlineSearch />
            </button>
          </div>
          {
            activeSearch.length > 0 && (
              <div className="absolute top-20 p-4 bg-slate-900 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 text-start">
                {
                  activeSearch.map(s => (
                    <span>{s}</span>
                  ))
                }
              </div>
            )
          }
        </span>

        {/* <span className="icons hover:bg-green-500 hover:text-white   cursor-pointer p-2">
            <FaShoppingCart />
          </span> */}
        <span className="cursor-pointer">
          <img src={img} alt="" className="size-10 rounded-full" />
          <p className="scale-85">
            Mary
          </p>
        </span>
        {/* ខ្មែរ Flag */}
        <span className="cursor-pointer">
          <img src={ខ្មែរ} alt="ខ្មែរ" className="size-10 rounded-full" />
          <p className="scale-85">
            ខ្មែរ
          </p>
        </span >
        {/* Englis Flag */}
        <span className="cursor-pointer">
          <img src={en} alt="en" className="size-10 rounded-full" />
          <p className="scale-85">
            English
          </p>
        </span>
      </div>
      <button className="md:hidden bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
        Save Changes
      </button>
    </header>

  )
}

export default Navbar
