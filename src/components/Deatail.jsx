import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { properties } from "../assets/data";
import { FaBed, FaBath, FaRuler } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Deatail = () => {
  const { id } = useParams();
  const property = properties.find((property) => property.id === parseInt(id));
  const [selectedTab, setSelectedTab] = useState("description");

const {ref, inView} = useInView({
  triggerOnce: true,
  threshold: 0.15,
})

const {ref2, inView2} = useInView({
  triggerOnce: true,
  threshold: 0.15,
})


  if (!property)
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Property not found.
        </h2>
        <p className="text-gray-500">
          The property you are looking for does not exist.
        </p>
        <Link to="/properties" className="text-pink-500 hover:text-pink-600">
          Go back to properties
        </Link>
      </div>
    );

  // Google Maps embed URL
  const mapUrl = `https://www.google.com/maps?q=${property.coordinates.latitude},${property.coordinates.longitude}&z=15&output=embed`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-20">
      {/* Photos & Gallery */}
      <div
      ref={ref}
      className={`flex flex-col md:flex-row gap-8 mb-8 
      ${inView ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}
      `}>
        {/* Main Image */}
        <div className="md:w-2/3 w-full">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-72 md:h-[400px] object-cover rounded-2xl shadow-lg mb-4"
          />
          {/* Gallery (if you have more images, add here) */}
          {/* <div className="flex gap-2 mt-2">
            <img src={...} ... />
          </div> */}
        </div>
        {/* Info Card */}
        <div className="md:w-1/3 w-full bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 border border-gray-100">
          <div className="text-2xl font-bold text-gray-800 mb-2">
            {property.name}
          </div>
          <div className="text-gray-500 text-sm mb-2">{property.location}</div>
          <div className="text-xl font-semibold text-pink-500 mb-2">
            ${property.price.toLocaleString()}
          </div>
          <div className="flex gap-4 text-gray-600 text-sm mb-2">
            <span> <FaBed className="inline-block"/> {property.bedrooms}</span>
            <span> <FaBath className="inline-block"/>{property.bathrooms} </span>
            <span><FaRuler className="inline-block"/> {property.area} </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {property.features &&
              property.features.map((f) => (
                <span
                  key={f}
                  className="bg-pink-100 text-pink-600 px-2 py-1 rounded text-xs font-medium"
                >
                  {f}
                </span>
              ))}
          </div>
          <div className="mt-4">
            <div className="font-semibold text-gray-700 mb-1 border-b border-gray-200 pb-2">
              Contact Agent
            </div>
            <div className="text-gray-800 font-medium">
              {property.contact.agent}
            </div>
            <div className="text-gray-500 text-sm">
              {property.contact.office}
            </div>
            <div className="text-gray-500 text-sm">
              {property.contact.phone}
            </div>
            <div className="text-pink-600 text-sm underline">
              <a href={`mailto:${property.contact.email}`}>
                {property.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex gap-2 mb-6 justify-center items-center">
        <h5
          className={`px-4 py-2 rounded-t-lg font-semibold focus:outline-none transition border-b-2 ${
            selectedTab === "description"
              ? "border-pink-500 text-pink-600 bg-pink-50"
              : "border-transparent text-gray-600 bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedTab("description")}
        >
          Description
        </h5>
        <h5
          className={`px-4 py-2 rounded-t-lg font-semibold focus:outline-none transition border-b-2 ${
            selectedTab === "location"
              ? "border-pink-500 text-pink-600 bg-pink-50"
              : "border-transparent text-gray-600 bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedTab("location")}
        >
          Location
        </h5>
      </div>
      {/* Tab Content */}
      {selectedTab === "description" && (
        <div className="mb-8">
          {/* <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Description
          </h2> */}
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
            <p className="text-gray-700 leading-relaxed p-4">
            {property.description}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              ipsam expedita, rem vero, quas tempora perferendis dolores sint
              tempore fugiat vel eveniet nemo inventore, a recusandae quo veniam
              facilis laudantium! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque nihil cumque tempora nisi maiores
              minima atque provident quibusdam, ipsam quisquam officiis
              assumenda sit nobis cupiditate aliquam soluta officia ullam sed
              quod dolorum, corrupti repudiandae repellat ut ab. Asperiores
              dolore numquam iste ea repellendus! Veritatis velit aperiam quos
              totam temporibus rerum.
              
            </p>
          </div>
        </div>
      )}
      {selectedTab === "location" && (
        <div className="mb-8">
          {/* <h2 className="text-xl font-semibold text-gray-800 mb-2">Location</h2> */}
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="map"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-gray-500 text-sm mt-2">{property.address}</div>
        </div>
      )}
    </div>
  );
};

export default Deatail;
