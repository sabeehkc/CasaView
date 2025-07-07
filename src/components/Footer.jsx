import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6 px-4 md:px-0">
      <div className="max-w-7xl mx-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-left">
        <div>
          <h3 className="font-bold font-serif text-lg mb-4">CasaView</h3>
          <p className="text-gray-500 mb-4">Far far away, behind the word mountains, far from the countries.</p>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons */}
            <a href="#" aria-label="Twitter" className="text-pink-400 hover:text-pink-600">
            <i className="fa-brands fa-x-twitter text-pink-400"></i>
            </a>
            <a href="#" aria-label="Facebook" className="text-pink-400 hover:text-pink-600">
            <i className="fa-brands fa-facebook-f text-pink-400"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-pink-400 hover:text-pink-600">
            <i className="fa-brands fa-instagram " ></i>
            </a>
          </div>
        </div>
        {/* Community */}
        <div>
          <h3 className="font-bold text-lg mb-4">Community</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-pink-400 transition">Search Properties</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">For Agents</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Reviews</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">FAQs</a></li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-pink-400 transition">Our Story</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Meet the team</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Careers</a></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-pink-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Press</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Careers</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Have a Questions?</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start space-x-2">
            <i className="fa-solid fa-location-dot text-pink-400 mt-1"></i>
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </li>
            <li className="flex items-center space-x-2">
            <i className="fa-solid fa-phone text-pink-400"></i>
              <a href="tel:+23923929210" className="hover:text-pink-400 transition">+2 392 3929 210</a>
            </li>
            <li className="flex items-center space-x-2">
          
            <i className="fa-solid fa-location-dot text-pink-400"></i>
              <a href="mailto:info@casaview.com" className="hover:text-pink-400 transition">info@casaview.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-12 border-t border-gray-100 pt-6 text-center text-gray-500 text-sm">
        Copyright {new Date().getFullYear()} All rights reserved | This website is made with
        <span className="inline-block mx-1 text-pink-400">♥</span>
        by <a href="#" className="text-pink-400 hover:underline">CasaView</a>
      </div>
    </footer>
  );
};

export default Footer;
