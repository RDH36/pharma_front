import { createPopper } from "@popperjs/core";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import EmployeeForm from "pages/Employees/EmployeeForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";

import ConfirmDialog from "../../components/ConfirmDialog";



const UserDropdown = () => {
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

  const openInPopup = item => {
    setRecordForEdit(item)
    setOpenPopup(true)
}

  const deconnection = id => {
    setConfirmDialog({
        ...confirmDialog,
        isOpen: false
    })
    employeeService.deleteEmployee(id);
    setRecords(employeeService.getAllEmployees())
    setNotify({
        isOpen: true,
        message: 'Deconnecter',
        type: 'Erreur'
    })
}


const [recordForEdit, setRecordForEdit] = useState(null)
const [records, setRecords] = useState(employeeService.getAllEmployees())
const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
const [openPopup, setOpenPopup] = useState(false)
const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
  return (
    <><p className="text-6xl "></p>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex fa-3x button-log">
        <FaUserCircle/>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-lightBlue-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-20"
        }
      > 
       <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-2">
             <li className="items-center">
             <button className="top_transmitv_cart">
                <Link
                  className=""
                  to="/client/historique"
                >
                  Historique d'achat
                </Link>
                </button>
              </li>

              <li className="items-center">
              <button className="top_transmitv_cart">
                <Link
                  className=" "
                  to="/client/compte"
                >
                  Mon compte
                </Link>
                </button>
              </li>
              <li className="items-center">
              <button className="top_transmitv_cart"  onClick={() => {
                setConfirmDialog({
                    isOpen: true,
                    title: 'Voulez-vous vraiment deconnecter?',
                    
                    onConfirm: () => { deconnection() }
                })
            }} id="deco">          
                Se deconnecter
                </button>
              </li>

            </ul>
      </div>
      <ConfirmDialog
      confirmDialog={confirmDialog}
      setConfirmDialog={setConfirmDialog}
  />
    </>
  );
};

export default UserDropdown;
