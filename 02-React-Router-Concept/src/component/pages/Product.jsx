

const bikes = [
  {
    id: 1,
    name: "Yamaha R15 V4",
    price: "$4,500",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    description: "Sporty design with powerful performance.",
  },
  {
    id: 2,
    name: "Honda CBR 150R",
    price: "$4,200",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    description: "Smooth ride with aggressive styling.",
  },
  {
    id: 3,
    name: "Kawasaki Ninja",
    price: "$6,500",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    description: "High-speed performance for bike lovers.",
  },
  {
    id: 4,
    name: "Suzuki Gixxer",
    price: "$3,800",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
    description: "Comfortable and stylish city ride.",
  },
  {
    id: 5,
    name: "KTM Duke 390",
    price: "$5,800",
    image: "https://images.unsplash.com/photo-1529429617124-aee711a5ac1c",
    description: "Sharp looks with powerful engine.",
  },
  {
    id: 6,
    name: "Royal Enfield Classic",
    price: "$5,200",
    image: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c",
    description: "Classic vintage look with modern power.",
  },
  {
    id: 7,
    name: "BMW S1000RR",
    price: "$18,000",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
    description: "Premium superbike for speed enthusiasts.",
  },
  {
    id: 8,
    name: "TVS Apache RTR",
    price: "$3,200",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    description: "Reliable and budget-friendly bike.",
  },
  {
    id: 9,
    name: "Bajaj Pulsar NS200",
    price: "$3,900",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    description: "Performance and style in one package.",
  },
  {
    id: 10,
    name: "Ducati Panigale",
    price: "$22,000",
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5",
    description: "Luxury superbike with extreme power.",
  },
];

const Product = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Bike Collection
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="card bg-base-100 shadow-xl border hover:shadow-2xl transition"
          >
            <figure>
              <img
                src={bike.image}
                alt={bike.name}
                className="h-56 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{bike.name}</h2>
              <p className="text-gray-500">{bike.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-primary">
                  {bike.price}
                </span>
                <button className="btn btn-primary btn-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;