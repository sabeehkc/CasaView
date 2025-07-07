import React from "react";
import CountUp from "react-countup";
import aboutImage from "../assets/aboutHome.jpg";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Properties Listed", value: 500, suffix: "+" },
  { label: "Luxury Villas", value: 120, suffix: "+" },
  { label: "Happy Clients", value: 3000, suffix: "+" },
];

const OurStory = ({ itsHome }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  return (
    <section className="w-full  py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
      
        <div
          className={`flex-1 ${
            inView ? "animate-fadeInUp" : ""
          }`}
          ref={ref}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            OUR STORY
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Founded in 2020,{" "}
            <span className="font-bold text-gray-900">CasaView</span> was
            created with a vision to make finding your dream home simple,
            transparent, and enjoyable. Whether you're looking to buy a luxury
            villa, rent a modern apartment, or invest in real estate, CasaView
            is your trusted partner.
          </p>

          {!itsHome && (
            <>
              <p className="text-md text-gray-600 mb-4">
                <span className="font-semibold text-gray-800">Our Vision:</span>{" "}
                To be the leading real estate platform, connecting people with
                the perfect property for every lifestyle and ambition.
              </p>
              <p className="text-md text-gray-600 mb-8">
                <span className="font-semibold text-gray-800">
                  Our Mission:
                </span>{" "}
                To empower individuals and families by providing high-quality
                listings, expert guidance, and a seamless experience for buying,
                selling, or renting homes and villas.
              </p>
            </>
          )}
          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-start">
                <span className="text-3xl font-extrabold text-gray-900">
                  <CountUp end={stat.value} duration={2} />
                  {stat.suffix}
                </span>
                <span className="text-gray-600 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      
        <div
          className={`flex-1  justify-center hidden sm:block ${
            inView1 ? "animate-fadeInUp" : ""
          }`}
          ref={ref1}
        >
          <img
            src={aboutImage}
            alt="Our Story"
            className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
