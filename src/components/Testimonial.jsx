import React, { useRef, useEffect } from 'react';
import { testimonials } from '../assets/data';
import { useInView } from 'react-intersection-observer';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const scrollRef = useRef(null);
  let interval;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector('.testimonial-card');
    if (!card) return;

    let scrollAmount = 0;
    const scrollStep = card.getBoundingClientRect().width + 24; // 24px = gap

    const startScroll = () => {
      interval = setInterval(() => {
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 5
        ) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          scrollAmount = 0;
        } else {
          scrollAmount += scrollStep;
          container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 2500);
    };

    container.addEventListener('mouseenter', () => clearInterval(interval));
    container.addEventListener('mouseleave', startScroll);

    startScroll();

    return () => {
      clearInterval(interval);
      container.removeEventListener('mouseenter', () => {});
      container.removeEventListener('mouseleave', () => {});
    };
  }, []);

  return (
    <section className="py-16" id="testimonials">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-pink-400"></div>
            <span className="text-sm uppercase tracking-widest text-pink-400">
              Testimonials
            </span>
            <div className="w-12 h-[1px] bg-pink-400"></div>
          </div>
          <h2 className="text-4xl font-semibold text-gray-700 mt-2">
            Happy Clients
          </h2>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col justify-between h-full min-w-[95vw] sm:min-w-[380px] lg:min-w-[420px] transition-transform duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* Testimonial Text */}
              <p className="text-gray-600 text-base mb-4 sm:mb-6 italic min-h-[60px]">
                "{t.text}"
              </p>
              {/* Footer: Image + Info */}
              <div className="flex items-center mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-pink-400 mr-4"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400 mb-1">
                    {t.property}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;