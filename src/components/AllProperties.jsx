import React, { useState, useMemo } from "react";
import { properties } from "../assets/data";
import Card from "./Card";
import { FaFilter, FaTimes } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const getUnique = (arr, key) => [...new Set(arr.map((item) => item[key]))];

const AllProperties = () => {
  // Filter state
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [ref1, inView1] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Unique filter options
  const types = useMemo(() => getUnique(properties, "type"), []);
  const statuses = useMemo(() => getUnique(properties, "status"), []);
  const cities = useMemo(() => getUnique(properties, "location"), []);

  // Filtering logic
  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (type && p.type !== type) return false;
      if (status && p.status !== status) return false;
      if (city && p.location !== city) return false;
      if (minPrice && p.price < Number(minPrice)) return false;
      if (maxPrice && p.price > Number(maxPrice)) return false;
      return true;
    });
  }, [type, status, city, minPrice, maxPrice]);

  const handleClear = () => {
    setType("");
    setStatus("");
    setCity("");
    setMinPrice("");
    setMaxPrice("");
  };

  const FilterForm = (
    <div className="flex flex-col gap-5 border-t border-gray-200 pt-4">
      {/* Type */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
        >
          <option value="">All</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
        >
          <option value="">All</option>
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          City
        </label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
        >
          <option value="">All</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Price Range
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max"
            className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-full px-4 sm:px-8 mx-auto mt-20 mb-10">
      <div className="md:hidden flex justify-between items-center mb-4 w-full">
        <div className="text-lg font-semibold text-gray-700">All Properties</div>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
          onClick={() => setShowMobileFilter(true)}
        >
          <FaFilter /> Filters
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90vw] max-w-sm relative animate-fadeInUp">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setShowMobileFilter(false)}
            >
              <FaTimes />
            </button>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold tracking-wide text-gray-700 uppercase font-serif">
                Filter
              </h3>
              <button
                onClick={handleClear}
                className="text-sm text-gray-500 hover:text-gray-700 transition rounded-md px-3 py-1 bg-gray-100"
              >
                Clear
              </button>
            </div>
            {FilterForm}
            <button
              className="mt-6 w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
              onClick={() => setShowMobileFilter(false)}
            >
              Show Results
            </button>
          </div>
        </div>
      )}

      {/* Desktop Filter Sidebar */}
      <aside
        ref={ref}
        className={`hidden md:block md:w-1/4 w-full bg-white rounded-2xl shadow-md p-6 mb-6 md:mb-0 border border-gray-100 ${
          inView ? "animate-fadeInUp" : ""
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold tracking-wide text-gray-700 uppercase font-serif">
            Filter
          </h3>
          <button
            onClick={handleClear}
            className="text-sm text-gray-500 hover:text-gray-700 transition rounded-md px-3 py-1 bg-gray-100"
          >
            <FaFilter />
          </button>
        </div>
        {FilterForm}
      </aside>

      {/* Properties List */}
      <main
        ref={ref1}
        className={`flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 
            ${inView1 ? 'animate-fadeInUp' : ''}
        }`}
      >
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-12">
            No properties found.
          </div>
        ) : (
          filtered.map((property) => (
            <Card key={property.id} property={property} />
          ))
        )}
      </main>
    </div>
  );
};

export default AllProperties;
