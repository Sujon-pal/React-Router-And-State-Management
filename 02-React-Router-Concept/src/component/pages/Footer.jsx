

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Bike Shop
            </h2>
            <p className="text-sm">
              Your trusted bike marketplace for premium bikes,
              accessories, and best deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a className="link link-hover">Home</a>
              </li>
              <li>
                <a className="link link-hover">Products</a>
              </li>
              <li>
                <a className="link link-hover">About Us</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>Bike Sales</li>
              <li>Bike Service</li>
              <li>Spare Parts</li>
              <li>Customer Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>
            <p>Email: bikeshop@gmail.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>
            © 2026 Bike Shop. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;