import React from "react";

const navbar = ({ link }) => {
  return (
    <nav >
      <li className="hover:bg-gray-400">
        <a>{link.name}</a>
      </li>
    </nav>
  );
};

export default navbar;
