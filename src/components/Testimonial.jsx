import React, { useRef, useEffect, useState } from 'react';
import { testimonials } from '../assets/data';
import { useInView } from 'react-intersection-observer';

const Testimonial = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 });
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll('.testimonial-card');
    if (!cards.length) return;

    const autoScroll = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonials.length;
        const currentCard = cards[nextIndex];
        if (currentCard) {
          const cardRect = currentCard.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const scrollPosition = currentCard.offsetLeft - (containerRect.width - cardRect.width) / 2;
          container.scrollTo({ left: Math.max(0, scrollPosition), behavior: 'smooth' });
        }
        return nextIndex;
      });
    };
    const interval = setInterval(autoScroll, 4000);
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => setInterval(autoScroll, 4000);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      clearInterval(interval);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${inView ? 'animate-fadeInUp' : ''}`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gray-200"></div>
            <span className="text-sm uppercase tracking-widest text-pink-400 font-medium">
              Testimonial
            </span>
            <div className="w-12 h-[1px] bg-gray-200"></div>
          </div>
          <h2 className="text-4xl font-semibold text-gray-600 mb-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide scroll-smooth justify-center "
          style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={ref2}
              className={`testimonial-card ${inView2 ? 'animate-fadeInUp' : ''} bg-white rounded-xl shadow-md p-8 flex flex-col justify-between flex-shrink-0 border border-gray-100`}
              style={{
                scrollSnapAlign: 'center',
                minWidth: '320px',
                maxWidth: '370px',
                width: '100%',
              }}
            >
              {/* Testimonial Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {testimonial.text}
              </p>
              {/* Client Info */}
              <div className="flex items-center mt-auto pt-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border border-gray-200"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.property}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicators */}
        <div className={`flex ${inView1 ? 'animate-fadeInUp' : ''} justify-center items-center gap-2 mt-8`}
        ref={ref1}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const container = scrollRef.current;
                if (container) {
                  const cards = container.querySelectorAll('.testimonial-card');
                  const currentCard = cards[index];
                  if (currentCard) {
                    const cardRect = currentCard.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const scrollPosition = currentCard.offsetLeft - (containerRect.width - cardRect.width) / 2;
                    container.scrollTo({ left: Math.max(0, scrollPosition), behavior: 'smooth' });
                    setCurrentIndex(index);
                  }
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-pink-400 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;