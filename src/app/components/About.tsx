"use client";

import { useState } from "react";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Position the About button at the top left */}
      <button
        onClick={togglePopup}
        className="absolute top-4 left-4 text-2xl bg-blue-500 text-white px-4 py-2 rounded"
      >
        About
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="rounded p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-xl">
              {" "}
              {/* Increased from text-lg to text-xl */}
              We are a family-owned bakery, offering a variety of freshly baked
              goods made with love and the finest ingredients. Come visit us for
              delicious pastries, bread, and more!
              <br />
              We specialize in traditional Persian bread made with high-quality
              ingredients. Our bakery is dedicated to bringing the authentic
              flavors of Persia to your table. Come and enjoy our freshly baked
              breads!
            </p>
            <button
              onClick={togglePopup}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
