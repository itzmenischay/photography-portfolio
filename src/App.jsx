import React from "react";
import { motion } from "framer-motion";


// Image imports
import herocover from "./assets/landingpage/herocover1.jpg";
import weddingImg from "./assets/landingpage/wedding.jpg";
import bridalImg from "./assets/landingpage/bridal1.jpg";
import preweddingImg from "./assets/landingpage/prewedding.jpg";

export default function App() {
  return (
    <div className="w-full">

      {/* SECTION 1: HERO */}
      <section className="relative h-[70vh] w-full">
        
        <img
          src={herocover}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Content */}
        <div className="relative top-30 z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl"
          >
            Welcome to Our Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-xl"
          >
            Capturing Moments, Creating Stories
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: OUR SERVICES */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 z-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {["Wedding Photography", "Videography", "Event Coverage"].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-2xl shadow-md p-8 hover:shadow-xl cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">
                Short description about {service.toLowerCase()} here.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: OUR WORKS */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            { title: "Wedding", img: weddingImg },
            { title: "Pre-Wedding", img: preweddingImg },
            { title: "Bridal", img: bridalImg }
          ].map((item, index) => (
            <div key={index} className="relative group overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer">
              <img
                src={item.img}
                alt={item.title}
                className="h-64 w-full object-cover rounded-xl group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-2xl font-bold rounded-xl">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 0.96 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="mt-8 inline-flex items-center justify-center h-[45px] px-6 py-3 rounded-full
                    font-semibold text-white bg-black  leading-none cursor-pointer"
        >
          Explore More Works
        </motion.button>
      </section>

      {/* SECTION 4: TESTIMONIALS */}
      <section className="py-16 bg-white text-center mb-4">
        <h2 className="text-3xl font-bold mb-10">Discover what our clients say</h2>
        <div className="overflow-x-auto flex gap-6 px-4 scrollbar-hide">
          {[1, 2, 3, 4].map((testimonial) => (
            <div
              key={testimonial}
              className="min-w-[300px] bg-gray-100 rounded-xl p-6 shadow-md"
            >
              <p className="italic text-gray-700">
                "They made our wedding day so special! Highly recommend."
              </p>
              <h4 className="mt-4 font-semibold">– Client Name</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
