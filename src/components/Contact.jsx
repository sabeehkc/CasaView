import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const { ref2, inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `*New Property Inquiry*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}

*Message:*
${formData.message}

---
Sent from CasaView Website`;

  
    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappNumber = "9778073408"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Ready to find your dream home? Contact us today and let our expert
          team help you every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form - Left Side */}
        <div
          ref={ref}
          className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-100 ${
            inView ? "animate-fadeInUp" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                placeholder="Tell us about your property needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-fuchsia-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" /> Send via WhatsApp
            </button>
          </form>
        </div>

        {/* Map & Contact Info - Right Side */}
        <div
          ref={ref2}
          className={`space-y-6 ${inView2 ? "animate-fadeInUp" : ""}`}
        >
         

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-pink-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                  +2 392 3929 210</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-pink-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">info@casaview.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-pink-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                  203 Fake St. Mountain View,
                    <br /> 
                    San Francisco, California, USA
                    <br />
                    PIN: 94040
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaClock className="text-pink-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    Mon-Fri: 9:00 AM - 6:00 PM
                    <br />
                    Sat: 10:00 AM - 4:00 PM
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

           {/* Map */}
           <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="w-full h-80">
              <iframe
                title="office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.1598561637!2d-122.08642602409675!3d37.386051672085884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0d2ad146939%3A0xdeb0841b500b353f!2sMedex!5e0!3m2!1sen!2sin!4v1751828464782!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
