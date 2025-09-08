import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav  
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="navbar absolute top-0 left-0 w-full z-10 flex flex-row p-4 justify-around items-center text-white"
    >
      {/* Logo */}
      <div className="logo font-bold text-2xl px-10">Our Studio</div>

      {/* Menu */}
      <div className="menu">
        <ul className="flex flex-row gap-2">
          <li className="relative px-6 cursor-pointer
            before:content-[''] before:absolute before:-bottom-[6px] before:left-1/2 
            before:-translate-x-1/2 before:w-[60%] before:h-[1px] before:bg-white 
            before:scale-x-0 before:origin-center before:transition-transform before:duration-300 
            hover:before:scale-x-100">
            <Link to="/">Home</Link>
          </li>
          <li className="relative px-6 cursor-pointer
            before:content-[''] before:absolute before:-bottom-[6px] before:left-1/2 
            before:-translate-x-1/2 before:w-[60%] before:h-[1px] before:bg-white 
            before:scale-x-0 before:origin-center before:transition-transform before:duration-300 
            hover:before:scale-x-100">
            <Link to="/about">About Us</Link>
          </li>
          <li className="relative px-6 cursor-pointer
            before:content-[''] before:absolute before:-bottom-[6px] before:left-1/2 
            before:-translate-x-1/2 before:w-[60%] before:h-[1px] before:bg-white 
            before:scale-x-0 before:origin-center before:transition-transform before:duration-300 
            hover:before:scale-x-100">
            <Link to="/whyus">Why us?</Link>
          </li>
          <li className="relative px-6 cursor-pointer
            before:content-[''] before:absolute before:-bottom-[6px] before:left-1/2 
            before:-translate-x-1/2 before:w-[60%] before:h-[1px] before:bg-white 
            before:scale-x-0 before:origin-center before:transition-transform before:duration-300 
            hover:before:scale-x-100">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="relative px-6 cursor-pointer
            before:content-[''] before:absolute before:-bottom-[6px] before:left-1/2 
            before:-translate-x-1/2 before:w-[60%] before:h-[1px] before:bg-white 
            before:scale-x-0 before:origin-center before:transition-transform before:duration-300 
            hover:before:scale-x-100">
            <Link to="/services">Our Services</Link>
          </li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="estimate-button">
        <motion.button
          whileHover={{ scale: 0.96 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="inline-flex items-center justify-center h-[45px] px-6 rounded-full
                    font-bold text-black text-lg bg-white  leading-none cursor-pointer"
        >
          <Link to="/estimate">Estimate your Event</Link>
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar
