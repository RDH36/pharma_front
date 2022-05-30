import { createPopper } from "@popperjs/core";
import React, { useState } from 'react';
import Controls from "components/controls/Controls";
import Popup from "components/Popup";
import Register from "views/auth/Register";
import RegisterPharmacie from "views/auth/RegisterPharmacie";
import Popup1 from "components/Popup1";




const InsriptionDropdown = () => {
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


  const [openPopup, setOpenPopup] = useState(false)
  const [openPopup1, setOpenPopup1] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [recordForEdit1, setRecordForEdit1] = useState(null)



  const addOrEdit = (employee, resetForm) => {

    resetForm()
    setRecordForEdit(null)
    setOpenPopup(false)

  }
  const addOrEdit1 = (employee, resetForm1) => {

    resetForm1()
    setRecordForEdit1(null)
    setOpenPopup1(false)

  }


  return (
    <>
      <button
        className="top_transmitv_cart"
        href="#pablo"
        ref={btnDropdownRef}

        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}


      >
        S'inscrire
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-lightBlue-500 text-base z-50 float-left px-2 py-2 list-none text-left rounded shadow-lg min-w-20"
        }
      >

        <Controls.Button
          text="Utilisateur"
          variant="outlined"
          className="top_transmitv_cart"
          onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
        />
        <Controls.Button
          text="Pharmacie"
          variant="outlined"
          className="top_transmitv_cart"
          onClick={() => { setOpenPopup1(true); setRecordForEdit1(null); }}
        />


      </div>
      <Popup
        title="Inscription Utilisateur"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Register
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
};

export default InsriptionDropdown;
