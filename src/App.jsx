import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Images ---
// The original local image paths were causing errors. 
// They have been replaced with placeholder URLs.
// const herocover = "https://placehold.co/1920x1080/a78bfa/ffffff?text=Hero+Cover";
// const weddingImg = "https://placehold.co/600x400/818cf8/ffffff?text=Wedding";
// const bridalImg = "https://placehold.co/600x400/f472b6/ffffff?text=Bridal";
// const preweddingImg = "https://placehold.co/600x400/60a5fa/ffffff?text=Pre-Wedding";
// const story1 = "https://placehold.co/500x500/fbbf24/ffffff?text=Story+1";
// const story2 = "https://placehold.co/500x500/a3e635/ffffff?text=Story+2";
// const story3 = "https://placehold.co/500x500/34d399/ffffff?text=Story+3";
// const story4 = "https://placehold.co/500x500/22d3ee/ffffff?text=Story+4";
// const story5 = "https://placehold.co/500x500/f87171/ffffff?text=Story+5";
// const story6 = "https://placehold.co/500x500/fb923c/ffffff?text=Story+6";

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


export default function App() {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            { title: "Wedding", img: weddingImg },
            { title: "Pre-Wedding", img: preweddingImg },
            { title: "Bridal", img: bridalImg }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
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
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 0.96 }}
          className="mt-12 inline-flex items-center justify-center h-[45px] px-6 py-3 rounded-full font-semibold text-white bg-black leading-none cursor-pointer"
        >
          Explore More Works
        </motion.button>
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

