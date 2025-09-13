import Navbar from "../components/Navbar";
import { useRef } from "react";
import { motion } from "framer-motion";

// Image imports
import aboutcover from ".././assets/aboutpage/aboutcover.webp"
import bts1 from ".././assets/aboutpage/bts1.webp"
import wedding1 from ".././assets/aboutpage/wedding1.webp"
import candid1 from ".././assets/aboutpage/candid1.webp"
import bts2 from ".././assets/aboutpage/bts2.webp"
import candid2 from ".././assets/aboutpage/candid2.webp"
import bride2 from ".././assets/aboutpage/bride2.webp"
import bride1 from ".././assets/aboutpage/bride1.webp"
import member1 from ".././assets/aboutpage/member1.webp"
import member2 from ".././assets/aboutpage/member2.webp"
import member3 from ".././assets/aboutpage/member3.webp"
import member4 from ".././assets/aboutpage/member4.webp"
import member5 from ".././assets/aboutpage/member5.webp"
import member6 from ".././assets/aboutpage/member6.webp"
import arrowRight from "../assets/arrow-right.png"
import Footer from "./Footer";

// Team membets data inside array
const teamMembers = [
  { id: 1, name: "Alice Johnson", role: "Lead Photographer", img: member1 },
  { id: 2, name: "Bob Smith", role: "Videographer", img: member2 },
  { id: 3, name: "Clara Lee", role: "Photo Editor", img: member3 },
  { id: 4, name: "David Kim", role: "Creative Director", img: member4 },
  { id: 5, name: "Eva Brown", role: "Assistant Photographer", img: member5 },
  { id: 6, name: "Frank White", role: "Videography Assistant", img: member6 },
];

export default function About() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust how much to scroll
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero / Cover Section */}
      <section className="relative h-[70vh] w-full">
        <img
          src={aboutcover}
          alt="About Our Studio"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <div className="relative top-30 z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            Get to Know Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl max-w-xl drop-shadow-md"
          >
            Every frame tells a story — and we’re here to tell yours.
          </motion.p>
        </div>
      </section>

      {/* Story Section: YOUR HAPPINESS IS ENOUGH FOR A COMPLETE STORY */}
      <section className="max-w-7xl mx-auto py-20 px-6 overflow-x-hidden">
        {/* The parent grid is now the main motion component that triggers the animation */}
        <motion.div 
          className="grid md:grid-cols-12 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0 }} // Ensures children animate simultaneously
        >
          {/* Left Column: It now inherits the animation trigger from its parent */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            className="md:col-span-7 grid grid-cols-2 grid-rows-2 gap-4 h-[550px]"
          >
            <img src={bride2} alt="Emotional Moments" className="rounded-xl object-cover h-full w-full" />
            <img src={bts2} alt="Wedding Moments" className="rounded-xl object-cover h-full w-full" />
            <img src={candid2} alt="Smiles and laughter" className="rounded-xl object-cover h-full w-full" />
            <img src={bride1} alt="Emotional Moments" className="rounded-xl object-cover h-full w-full" />
          </motion.div>

          {/* Right Column: It also inherits the same trigger */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            className="md:col-span-5 flex flex-col justify-center space-y-6 text-left"
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              Your Moments, Our Masterpiece
            </h2>
            <p className="text-lg leading-relaxed">
              Every laugh, every tear, every embrace — these moments make a story worth
              telling. We believe that the true beauty of your celebrations lies in the
              emotions you share with the people you love.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to capture your joy authentically, turning fleeting moments
              into timeless memories. With us, your happiness becomes the heart of every frame.
            </p>
            <p className="text-lg leading-relaxed">
              Let us tell your story — one genuine smile at a time.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* About Content Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 overflow-x-hidden">
        {/* The parent grid is now the main motion component that triggers the animation */}
        <motion.div
          className="grid md:grid-cols-12 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0 }} // Ensures children animate simultaneously
        >
          {/* Left Column: Text - Inherits animation trigger from its parent */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            className="md:col-span-5 flex flex-col justify-center space-y-6 md:text-right"
          >
            <h2 className="text-5xl md:text-6xl font-bold">Our Story</h2>
            <p className="text-lg leading-relaxed">
              We are a passionate team of photographers and filmmakers dedicated to
              turning your moments into timeless memories. Whether it’s a wedding,
              pre-wedding shoot, or a creative project, our goal is to capture raw
              emotions and authentic beauty through our lens.
            </p>
            <p className="text-lg leading-relaxed">
              With years of experience, we blend artistry with technical expertise,
              ensuring every shot feels cinematic and meaningful. Your story deserves
              more than just pictures — it deserves to be remembered forever.
            </p>
          </motion.div>

          {/* Right Column: Images - Also inherits the same trigger */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            className="md:col-span-7 grid grid-cols-2 grid-rows-2 gap-4 h-[550px]"
          >
            <img
              src={bts1}
              alt="Behind the scenes"
              className="rounded-xl object-cover h-full w-full row-span-2"
            />
            <img
              src={wedding1}
              alt="Wedding shoot"
              className="rounded-xl object-cover h-full w-full"
            />
            <img
              src={candid1}
              alt="Candid moments"
              className="rounded-xl object-cover h-full w-full"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6 overflow-x-hidden">
        {/* The parent grid is now the main motion component that triggers the animation */}
        <motion.div 
          className="grid md:grid-cols-12 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0 }} // Ensures children animate simultaneously
        >
          {/* Left Column: It now inherits the animation trigger from its parent */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            className="md:col-span-7 grid grid-cols-2 grid-rows-2 gap-4 h-[550px]"
          >
            <img src={bride2} alt="Emotional Moments" className="rounded-xl object-cover h-full w-full" />
            <img src={bts2} alt="Wedding Moments" className="rounded-xl object-cover h-full w-full" />
            <img src={candid2} alt="Smiles and laughter" className="rounded-xl object-cover h-full w-full" />
            <img src={bride1} alt="Emotional Moments" className="rounded-xl object-cover h-full w-full" />
          </motion.div>

          {/* Right Column: It also inherits the same trigger */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            className="md:col-span-5 flex flex-col justify-center space-y-6 text-left"
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              Why Choose Our Vision?
            </h2>
            <p className="text-lg leading-relaxed">
              It's more than just photos; it’s about capturing the soul of your story. We pour our passion and dedication into every single frame, ensuring your memories are not just seen, but deeply felt for years to come.
            </p>
            <p className="text-lg leading-relaxed">
              With years of experience across India, we blend artistic storytelling with technical excellence. Our team is committed to a seamless and personal experience, delivering cinematic quality that truly reflects who you are.
            </p>
            <p className="text-lg leading-relaxed">
              Let us show you why countless couples have trusted us to turn their moments into timeless masterpieces.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Meet our team section */}
        <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-700">
            Get to know the talented people who make every moment unforgettable.
          </p>
        </div>

        {/* Team Cards */}
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white rounded-full p-3 z-20 shadow-lg hover:bg-gray-800 cursor-pointer"
          >
            <img width={20} style={{filter: "invert(1)", transform: "rotate(180deg)"}} src={arrowRight} alt="" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white rounded-full p-3 z-20 shadow-lg hover:bg-gray-800 cursor-pointer"
          >
            <img width={20} style={{filter: "invert(1)"}} src={arrowRight} alt="" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scrollbar-hide scroll-smooth py-4"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ scale: 1.05 }}
                className="min-w-[250px] bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
