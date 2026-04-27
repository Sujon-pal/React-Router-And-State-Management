import React, { use } from "react";
import PricingCard from "./PricingCard";

const PricingOption = ({ pricingPromice }) => {
  const pricingData = use(pricingPromice);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold mt-10 text-center mb-12">
        Join Our Membership
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default PricingOption;