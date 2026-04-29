
import {  NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-72 min-h-screen bg-base-200 shadow-lg p-6">
      
      {/* Logo */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-primary">
          Bike Shop
        </h2>
      </div>

      {/* Menu */}
      <ul className="menu space-y-3">

        <li>
          <NavLink
            to="/"
            className="text-lg font-medium hover:bg-base-300 rounded-lg"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/product"
            className="text-lg font-medium hover:bg-base-300 rounded-lg"
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/ProductDetails"
            className="text-lg font-medium hover:bg-base-300 rounded-lg"
          >
            Product Details
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className="text-lg font-medium hover:bg-base-300 rounded-lg"
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="text-lg font-medium hover:bg-base-300 rounded-lg"
          >
            Contact
          </NavLink>
        </li>

      </ul>

      {/* Bottom Button */}
      <div className="mt-10">
        <button className="btn btn-primary w-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SideBar;