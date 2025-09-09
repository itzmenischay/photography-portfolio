import React from 'react';
import { Link } from "react-router-dom";

// Social media icons as simple SVG components for easy use.
const SocialIcon = ({ href, children }) => (
  <Link to={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
    {children}
  </Link>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
  </svg>
);


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Branding & Tagline */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold text-white mb-4">Our Studio</h3>
            <p className="max-w-sm leading-relaxed">
              Passionate storytellers from India, capturing life's most cherished moments through cinematic photography and film.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4 tracking-wider">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
           <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4 tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="#wedding-photography" className="hover:text-white transition-colors">Wedding Photography</Link></li>
              <li><Link to="#pre-wedding-shoots" className="hover:text-white transition-colors">Pre-Wedding Shoots</Link></li>
              <li><Link to="#cinematic-films" className="hover:text-white transition-colors">Cinematic Films</Link></li>
              <li><Link to="#portfolio-shoots" className="hover:text-white transition-colors">Portfolio & Events</Link></li>
            </ul>
          </div>


          {/* Column 4: Contact & Socials */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4 tracking-wider">Get in Touch</h4>
            <p className="mb-4">
              Ready to tell your story? <br/>
              Let's create something beautiful.
            </p>
            <Link to="#" className="block mb-4 text-sky-400 hover:text-sky-300 transition-colors">contact@ourstudio.com</Link>
            <div className="flex space-x-5">
              <SocialIcon href="https://twitter.com"><TwitterIcon /></SocialIcon>
              <SocialIcon href="https://linkedin.com"><LinkedInIcon /></SocialIcon>
              <SocialIcon href="https://instagram.com"><InstagramIcon /></SocialIcon>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Credits */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} Our Studio. All Rights Reserved.</p>
          <p className="mt-2">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;