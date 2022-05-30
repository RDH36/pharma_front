import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardAddProduct from "components/Cards/CardAddProduct.js";
import { FaBell } from "react-icons/fa";

const DashboardDropdown = () => {
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
        className="lg:text-white lg:hover:text-blueGray-200 rounded text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <FaBell />
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap rounded bg-transparent text-blueGray-400"
          }
        >
          Approvisionnement et courbes
        </span>
        <CardAddProduct />
        <CardLineChart />
      </div>
    </>
  );
};

export default DashboardDropdown;
