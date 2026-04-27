import React, { useState } from "react";
import { Check } from "lucide-react";

const PricingCard = ({ pricing }) => {
  const { plan, price, duration, description, features } = pricing;

  const [showAll, setShowAll] = useState(false);

  // কতগুলো feature শুরুতে দেখাবে
  const visibleFeatures = showAll ? features : features.slice(0, 4);

  return (
    <div className="bg-gray-200 border rounded-2xl shadow-xs p-6   hover:shadow-2xl transition duration-300 flex flex-col">
      
      {/* Plan Name */}
      <h2 className="text-2xl font-bold mb-3">{plan}</h2>

      {/* Price */}
      <div className="mb-4">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-500">/{duration}</span>
      </div>

      {/* Description */}
      <p className="text-gray-500 mb-6">
        {description}
      </p>

      {/* Features */}
      <div className="flex-1">
        <ul className="space-y-3">
          {visibleFeatures.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check size={18} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* See More / See Less */}
        {features.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-blue-500 text-sm font-semibold hover:underline"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        )}
      </div>

      {/* Button */}
      <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:opacity-90">
        Join Now
      </button>
    </div>
  );
};

export default PricingCard;