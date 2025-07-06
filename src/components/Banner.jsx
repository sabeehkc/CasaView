import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/BannerImages/beach_cat.jpg";
import image2 from "../assets/BannerImages/pool_cat.jpg";
import image3 from "../assets/BannerImages/lux_cat.jpg";
import image4 from "../assets/BannerImages/modern_cat.webp";

const BannerImages = [
  { id: 1, url: image1, alt: "Beachfront property" },
  { id: 2, url: image2, alt: "Lake view property" },
  { id: 3, url: image3, alt: "Luxury property" },
  { id: 4, url: image4, alt: "Modern property" },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + BannerImages.length) % BannerImages.length
    );
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % BannerImages.length);

  return (
    <div className="relative w-full h-[700px] overflow-hidden mt-0">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {BannerImages.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Image with fallback styling */}
            <div className="absolute inset-0 bg-gray-900">
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${slide.url}`);
                  e.target.style.opacity = "0";
                }}
              />
            </div>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-opacity-30"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white z-20">
              <div className="px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  Find Your Dream Home
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  Discover the perfect property that matches your lifestyle and
                  aspirations
                </p>
                <button
                  onClick={() => navigate("/properties")}
                  className="bg-white text-black px-8 py-3 cursor-pointer rounded-lg text-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors"
                >
                  Explore Properties
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute hidden md:block left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 hidden md:block top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {BannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
