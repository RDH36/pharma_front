import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

import CardPanier from "components/Cards/CardPanier";

const PanierDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    console.log("hey");
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
        className="text-white-500 block py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="bg-white text-blueGray-700 rounded-full active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
          <i className="fas fa-cart-arrow-down fa-2x icon-panier"></i>
          Mon panier
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={dropdownPopoverShow ? "block " : "hidden "}
      >
        <div className="flex flex-wrap">
          <div className="xl:w-6/12 ">
            <CardPanier />
          </div>
        </div>
      </div>
    </>
  );
};

export default PanierDropdown;
