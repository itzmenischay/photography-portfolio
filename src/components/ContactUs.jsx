import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "./Footer";

// Icon Imports
import whatsappIcon from "../assets/whatsappicon.png"

// Image Imports
import contactCover from "../assets/contactpage/contactcover.jpg"
import formBg from "../assets/contactpage/formbg.jpg"

// Functionality for Contact Us Form
const ContactUs = () => {
  // Create a ref for the section we want to track
  const sectionRef = useRef(null);
  

  // Functionality for Scroll Triggered Background
  // useScroll hook to track scroll progress of the referenced section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Animate from when the section starts entering to when it fully leaves
  });

  // useTransform to map scroll progress to a vertical movement (parallax effect)
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="w-full bg-black">

      {/* SECTION 1 – Hero */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <img
          src={contactCover}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative top-30 z-10 flex flex-col justify-center items-center text-center text-white p-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            Get in Touch to Begin Your Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl max-w-xl drop-shadow-md"
          >
            We’re here to listen — start the conversation with us today.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 – CTA */}
      <section className="text-center py-12 bg-gray-50 relative z-10">
        {/* Use motion.a for external links */}
        <motion.a
          href="https://wa.me/918240899917" // The correct attribute for links is href
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Important for security with target="_blank"
          
          // Animation props are now directly on the link
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 0.96 }}
          
          // Styling remains the same
          className="inline-flex justify-center items-center h-14 w-72 px-4 py-6 rounded-full text-md font-semibold text-white bg-green-600 cursor-pointer shadow-lg"
        >
          Chat With Us on WhatsApp 
          <span className="pl-4">
            <img 
              src={whatsappIcon} 
              alt="whatsapp-icon" 
              width={20} 
              style={{ filter: "invert(1)" }} 
            />
          </span>
        </motion.a>
      </section>

      {/* SECTION 3 – Form & Info with Parallax Background */}
      <section ref={sectionRef} className="relative py-16 overflow-hidden">
        {/* The slowly scrolling background image */}
        <motion.div
            className="absolute inset-0 z-0"
            style={{
                backgroundImage: `url(${formBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                y: y, // This style is animated by the scroll progress
            }}
        />
        {/* A semi-transparent overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Box: Form with animation */}
          <motion.div 
            className="backdrop-blur-xs bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm text-white/90 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm text-white/90 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="your@email.com"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/90 mb-1">Phone No</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="1234567890"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/90 mb-1">WhatsApp No</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="1234567890"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/90 mb-1">Service</label>
                <select className="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none">
                  <option className="bg-slate-800">Wedding Photography</option>
                  <option className="bg-slate-800">Pre-Wedding</option>
                  <option className="bg-slate-800">Bridal Portraits</option>
                  <option className="bg-slate-800">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/90 mb-1">Feedback / Queries</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Write your message here..."
                />
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 cursor-pointer"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Right Box: Contact Info with animation */}
          <motion.div 
            className="backdrop-blur-xs bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8 text-left text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <h2 className="text-2xl font-bold mb-6">Our Studio</h2>
            <p className="mb-4">
              <span className="font-semibold">Call:</span> +91 9876543210
            </p>
            <p className="mb-4">
              <span className="font-semibold">WhatsApp:</span> +91 9876543210
            </p>
            <p className="mb-4">
              <span className="font-semibold">Telegram:</span> @yourhandle
            </p>
            <p className="mb-4">
              <span className="font-semibold">Email:</span> contact@yourstudio.com
            </p>
            <p className="mb-4">
              <span className="font-semibold">Address:</span> 123 Wedding Lane,
              PhotoCity, India
            </p>
            <p className="text-white/70 text-sm mt-8">
              Available Mon–Sat, 10:00 AM to 8:00 PM
            </p>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </div>
    
  );
};

export default ContactUs;

