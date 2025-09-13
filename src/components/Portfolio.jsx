import React from 'react';
// Removed unused 'delay' import
import { motion } from 'framer-motion';

// --- Placeholder Assets ---
// Import your actual assets here
import bgVideoMP4 from "../assets/portfoliopage/backgroundvideo.mp4";
import photoscard from "../assets/portfoliopage/photoscard.jpg";
import videoscard from "../assets/portfoliopage/videoscard.mp4";
import Footer from './Footer';


// --- Main Component ---
const PortfolioPage = () => {

  // Animation variants for the container to orchestrate the card animations
  const containerVariants = {
    hidden: { opacity: 1 }, // Parent is visible, children are hidden
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0, // Set to 0 to make children animate at the same time
        delayChildren: 1, // 1-second delay before animations start
      },
    },
  };

  // Animation variants for the left card (Photos)
  const leftCardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        ease: 'easeInOut',
        stiffness: 80, 
        damping: 15
      },
    },
  };
  
  // Animation variants for the right card (Videos)
  const rightCardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        type: 'tween',
        duration: 0.8,
        ease: 'easeInOut',
        stiffness: 80,
        damping: 15
      },
    },
  };


  return (
    <>
      {/* The 'overflow-x-hidden' class is the key fix.
        It prevents any horizontal scrolling caused by child elements
        being positioned outside the viewport initially.
      */}
      <section className="relative h-screen w-full overflow-x-hidden flex items-center justify-center">
        {/* 1. Fullscreen Video Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline // Essential for autoplay on mobile browsers
            className="w-full h-full object-cover"
          >
            <source src={bgVideoMP4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* 2. Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* 3. Content Container */}
        <div className="relative z-20 container mx-auto px-4 w-full">
          {/* Cards are now in a flex container to be side-by-side and centered */}
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Card 1: Photos - Animates from left */}
            <motion.div
              variants={leftCardVariants}
              whileHover={{ scale: 1.05 }}
              transition= {{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-lg aspect-[4/3] rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
            >
              <img 
                src={photoscard} 
                alt="Photography portfolio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold tracking-wider uppercase">
                  Photos
                </h2>
              </div>
            </motion.div>

            {/* Card 2: Videos - Animates from right */}
            <motion.div
              variants={rightCardVariants}
              whileHover={{ scale: 1.05 }}
              transition= {{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-lg aspect-[4/3] rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={videoscard} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold tracking-wider uppercase">
                  Videos
                </h2>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default PortfolioPage;