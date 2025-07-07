import React from "react";
import { FaBed, FaBath, FaRulerCombined, FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ property }) => {
  const isForRent = property.status === "For Rent";
  const navigate = useNavigate();
  return (
    <div className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 relative group">
      {/* Status Badge */}
      <span
        className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-md ${
          isForRent
            ? "bg-blue-100 text-blue-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {property.status}
      </span>
      <div className="overflow-hidden h-56 lg:w-[400px] md:w-[300px] sm:w-[250px]">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col gap-2">
        {/* Price Row */}
        <div className="flex items-end gap-2 mb-1">
          {isForRent && (
            <span className="text-gray-400 line-through text-sm">
              ${(property.price * 2).toLocaleString()}
            </span>
          )}
          <span className="text-2xl font-extrabold text-gray-900">
            ${property.price.toLocaleString()}
            {isForRent && (
              <span className="text-base font-medium text-gray-500">/mo</span>
            )}
          </span>
        </div>
        {/* Details Row */}
        <div className="flex items-center text-gray-500 text-sm gap-6 mb-2">
          <span className="flex items-center gap-1">
            <FaBed className="text-lg" />
            {property.bedrooms}
          </span>
          <span className="flex items-center gap-1">
            <FaBath className="text-lg" />
            {property.bathrooms}
          </span>
          <span className="flex items-center gap-1">
            <FaRulerCombined className="text-lg" />
            {property.area} sqft
          </span>
        </div>
        {/* Name & Location */}
        <div className="font-semibold text-lg text-gray-900 leading-tight truncate">
          {property.name}
        </div>
        <div className="text-gray-500 text-sm truncate">
          {property.location}
        </div>
      </div>
      {/*Action Button */}
      <button
        className="absolute bottom-5 right-5 bg-gradient-to-tr from-pink-500 to-fuchsia-500 text-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
        onClick={() => navigate(`/property/${property.id}`)}
      >
        <FaLink className="text-lg" />
      </button>
    </div>
  );
};

export default Card;
