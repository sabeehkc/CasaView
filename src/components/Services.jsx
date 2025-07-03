import React from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: "fa-piggy-bank",
    title: "No Downpayment",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: "fa-wallet",
    title: "All Cash Offer",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: "fa-file",
    title: "Experts in Your Corner",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: "fa-lock",
    title: "Locked in Pricing",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 ${inView ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`} ref={ref}>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-pink-400"></div>
            <span className="text-sm uppercase tracking-widest text-pink-400">
              Our Services
            </span>
            <div className="w-12 h-[1px] bg-pink-400"></div>
          </div>
          <h2 className="text-4xl font-semibold text-gray-600 mt-2">
            The smartest way to buy a home
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-20 py-5">
          {services.map((service, idx) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.15,
            });
            return (
              <div
                ref={ref}
                key={service.title}
                className={`flex flex-col items-center text-center bg-white p-6 transition-all duration-700 ${
                  inView ? "animate-fadeInUp" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl text-pink-400 mb-4">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-normal font-sans mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
