import {  NavLink } from "react-router-dom";

const NaveBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <nav className="text-gray-600 font-semibold flex gap-8 pr-10">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/product">Product</NavLink>

        <NavLink to="/ProductDetails">ProductDetails</NavLink>

        <NavLink to="/user">
          {({ isPending }) => (
            <span className="flex items-center gap-2">
              User
              {isPending && (
                <span className="loading loading-spinner loading-sm"></span>
              )}
            </span>
          )}
        </NavLink>
      </nav>
    </div>
  );
};

export default NaveBar;