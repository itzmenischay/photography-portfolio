import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero / Cover Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src="/images/about-cover.jpg"
          alt="About Our Studio"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Get to Know Us
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl drop-shadow-md">
            Every frame tells a story — and we’re here to tell yours.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left Column: Text */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold">Our Story</h2>
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
          </div>

          {/* Right Column: Asymmetric Grid of Images */}
          <div className="md:col-span-7 grid grid-cols-2 grid-rows-2 gap-4">
            <img
              src="/images/about-1.jpg"
              alt="Behind the scenes"
              className="rounded-xl object-cover h-full w-full row-span-2"
            />
            <img
              src="/images/about-2.jpg"
              alt="Wedding shoot"
              className="rounded-xl object-cover h-full w-full"
            />
            <img
              src="/images/about-3.jpg"
              alt="Candid moments"
              className="rounded-xl object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

