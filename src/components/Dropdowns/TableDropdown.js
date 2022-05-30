import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";
import Popup2 from "components/Popup2";
import Login from "views/auth/LoginAdmin";
import Controls from "components/controls/Controls";


const NotificationDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const [openPopup2, setOpenPopup2] = useState(false)
  const [recordForEdit2, setRecordForEdit2] = useState(null)



  const addOrEdit2 = (employee, resetForm2) => {

    resetForm2()
    setRecordForEdit2(null)
    setOpenPopup2(false)

  }
 
  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-0 float-left py-2 list-none text-left rounded  min-w-24"
        }
      >
      <Controls.Button
          text="Administrateur"
          variant="outlined"
          className=""
          onClick={() => {setOpenPopup2(true); setRecordForEdit2(null); }}
        />
     
      </div>

      <Popup2
        title="Connexion Administrateur"
        openPopup2={openPopup2}
        setOpenPopup2={setOpenPopup2}
      >
        <Login
          recordForEdit2={recordForEdit2}
          addOrEdit2={addOrEdit2} />
      </Popup2>
    </>
  );
};

export default NotificationDropdown;
