import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
    <a
    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    href="#pablo"
    ref={btnDropdownRef}
    onClick={(e) => {
      e.preventDefault();
      dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
    }}
  >
    Se connecter
  </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left px-2 py-3  text-left cursor-pointer rounded shadow-lg min-w-20"
        }
      >
        
        <Link
          to="/auth/Login"
          className="lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        >
          Utilisateur
        </Link>
        <Link
          to="/auth/Login"
          className="lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        >
          Pharmacie
        </Link>
        
       
        <Link
          to="/auth/Login"
          className="lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        >
          Administrateur
        </Link>
       
      </div>
    </>
  );
};

export default IndexDropdown;
