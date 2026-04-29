

const ProductDetails = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="card lg:card-side bg-base-100 shadow-xl border rounded-2xl overflow-hidden">
        
        {/* Product Image */}
        <figure className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39"
            alt="Bike"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Product Details */}
        <div className="card-body lg:w-1/2 p-8">
          <h2 className="text-4xl font-bold">
            Yamaha R15 V4
          </h2>

          <p className="text-lg text-gray-500 mt-4">
            The Yamaha R15 V4 is a premium sports bike with
            aggressive styling, advanced braking system,
            liquid-cooled engine, and excellent speed performance.
          </p>

          <div className="mt-6 space-y-3">
            <p className="text-xl">
              <span className="font-bold">Engine:</span> 155cc
            </p>

            <p className="text-xl">
              <span className="font-bold">Top Speed:</span> 140 km/h
            </p>

            <p className="text-xl">
              <span className="font-bold">Mileage:</span> 45 km/l
            </p>

            <p className="text-xl">
              <span className="font-bold">Color:</span> Black & Blue
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <h3 className="text-3xl font-bold text-primary">
              $4,500
            </h3>

            <button className="btn btn-primary px-8">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;