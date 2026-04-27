import React, { useState } from "react";
import Navbar from "./Navbar";
import { Menu, X } from "lucide-react";

const links = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavData = () => {
  const [open, setOpen] = useState(false);

  const link = links.map((link) => <Navbar link={link}></Navbar>);
  return (
    <nav className="flex gap-5 justify-between px-10 pt-4 ">
      <span
        className="flex
      gap-4 "
        onClick={() => setOpen(!open)}
      >
        {open ? (
            <X className="md:hidden cursor-pointer" />
          ) : (
            <Menu className="md:hidden cursor-pointer" />
          )}
        <ul
          className={`md:hidden absolute duration-1000 bg-gray-200 px-3 rounded-2xl cursor-pointer 
            ${open ? "top-12 left-10" : "-top-80"}
            
            `}
        >
          {link}
        </ul>

        <h1>Nav bar</h1>
      </span>
      <ul className="md:flex gap-8 hidden">{link}</ul>

      <button>Login</button>
    </nav>
  );
};

export default NavData;
