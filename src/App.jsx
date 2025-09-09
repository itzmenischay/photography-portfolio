import React from "react";
import { useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import { X } from "lucide-react";


// Image imports
import herocover from "./assets/landingpage/herocover1.webp"
import weddingImg from "./assets/landingpage/wedding.webp"
import bridalImg from "./assets/landingpage/bridal1.webp"
import preweddingImg from "./assets/landingpage/prewedding.webp"
import story1 from "./assets/landingpage/story1.webp"
import story2 from "./assets/landingpage/story2.webp"
import story3 from "./assets/landingpage/story3.webp"
import story4 from "./assets/landingpage/story4.webp"
import story5 from "./assets/landingpage/story5.webp"
import story6 from "./assets/landingpage/story6.webp"
import Footer from "./components/Footer";

// Icon imports
import topRight from "./assets/top-right.png"


export default function App() {
  const [activeItem, setActiveItem] = useState(null);

  const works = [
    { title: "Wedding", img: weddingImg },
    { title: "Pre-Wedding", img: preweddingImg },
    { title: "Bridal", img: bridalImg },
  ];

  return (
    <div className="w-full bg-white">

      {/* SECTION 1: HERO (Animates on Page Load) */}
      <section className="relative h-[70vh] w-full">
        <img
          src={herocover}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative top-30 z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            Welcome to Our Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl max-w-xl drop-shadow-md"
          >
            Capturing Moments, Creating Stories
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: WEDDING STORIES (Animates on Scroll) */}
      <section className="py-20 bg-gray-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-3xl font-bold mb-12"
        >
          Unfolding Wedding Tales
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto px-4 w-[80vw]">
          {[
            { img: story1, couple: "Aarav & Meera", place: "Udaipur Palace", event: "Royal Destination Wedding" },
            { img: story2, couple: "Rohan & Siya", place: "Goa Beach", event: "Sunset Beach Wedding" },
            { img: story3, couple: "Kabir & Ananya", place: "Jaipur Fort", event: "Cultural Pre-Wedding" },
            { img: story4, couple: "Ishaan & Kavya", place: "Manali Hills", event: "Mountain Vows" },
            { img: story5, couple: "Dev & Priya", place: "Kerala Backwaters", event: "Traditional South Indian Wedding" },
            { img: story6, couple: "Arjun & Nisha", place: "Mumbai Cityscape", event: "Modern Urban Pre-Wedding" },
          ].map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={story.img}
                alt={story.couple}
                className="h-[600px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="mt-4 text-center p-2">
                <h3 className="font-semibold text-lg">{story.couple}</h3>
                <p className="text-sm text-gray-600">{story.place} – {story.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: OUR SERVICES (Animates on Scroll) */}
      <section className="py-20 bg-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-3xl font-bold mb-10"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {["Wedding Photography", "Videography", "Event Coverage"].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="bg-gray-100 rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">Short description about {service.toLowerCase()} here.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: OUR WORKS (Animates on Scroll) */}
      <section className="py-16 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-3xl font-bold mb-10"
      >
        Our Works
      </motion.h2>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {works.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            animate={
              activeItem?.title === item.title
                ? { rotateY: 90, opacity: 0 }
                : { rotateY: 0, opacity: 1 }
            }
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
              delay: index * 0.15,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => setActiveItem(item)}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-64 w-full object-cover group-hover:brightness-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-2xl font-bold">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 0.96 }}
        className="mt-12 inline-flex items-center justify-center h-[45px] px-6 py-3 rounded-full font-semibold text-white bg-black leading-none cursor-pointer"
      >
        Explore More Works <span className="pl-2"><img src={topRight} alt="" width={12} style={{ filter: "invert(1)"}}/></span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {activeItem && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveItem(null)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ rotateY: 90 }}
              animate={{
                rotateY: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              }}
              exit={{
                rotateY: 90,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg relative overflow-hidden">
                <motion.button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-black/30 hover:bg-black/50 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>

                <img
                  src={activeItem.img}
                  alt={activeItem.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-6 text-left">
                  <h2 className="text-2xl font-bold mb-2">
                    {activeItem.title}
                  </h2>
                  <p className="text-gray-600">
                    This is a detailed showcase of our {activeItem.title} work.
                    We captured timeless moments with precision and artistry.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>

      {/* SECTION 5: TESTIMONIALS (Animates on Scroll) */}
      <section className="py-16 bg-white text-center mb-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-3xl font-bold mb-10"
        >
          Discover what our clients say
        </motion.h2>
        <div className="flex gap-6 px-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[1, 2, 3, 4].map((testimonial, index) => (
            <motion.div
              key={testimonial}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="min-w-[300px] bg-gray-100 rounded-xl p-6 shadow-md"
            >
              <p className="italic text-gray-700">"They made our wedding day so special! Highly recommend."</p>
              <h4 className="mt-4 font-semibold">– Client Name</h4>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
}

