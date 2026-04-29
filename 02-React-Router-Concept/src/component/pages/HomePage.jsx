

const HomePage = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39"
            className="max-w-lg rounded-2xl shadow-2xl"
            alt="Bike"
          />

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Ride Your Dream <br /> Bike Today
            </h1>
            <p className="py-6 text-gray-500">
              Explore premium sports bikes, scooters, and superbikes with the
              best deals and latest models.
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Featured Bikes</h2>
          <p className="text-gray-500 mt-3">
            Choose from our latest collections
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((bike) => (
            <div
              key={bike}
              className="card bg-base-100 shadow-xl border hover:shadow-2xl transition"
            >
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1517846693594-1567da72af75"
                  alt="Bike"
                  className="h-64 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">Yamaha R15 V4</h2>
                <p>Powerful engine, stylish design, top speed performance.</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold">$4,500</span>
                  <button className="btn btn-outline btn-primary">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-base-200 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Why Choose Us</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold">Best Quality</h3>
            <p className="mt-3 text-gray-500">
              Premium and verified bikes only.
            </p>
          </div>

          <div className="card bg-base-100 shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold">Affordable Price</h3>
            <p className="mt-3 text-gray-500">
              Competitive prices with discounts.
            </p>
          </div>

          <div className="card bg-base-100 shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold">Fast Delivery</h3>
            <p className="mt-3 text-gray-500">
              Quick and secure delivery service.
            </p>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default HomePage;