/*eslint-disable*/
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Popup1 from "components/Popup1";
import Popup from "components/Popup";
import Controls from "components/controls/Controls";
import RegisterPharmacie from 'views/auth/RegisterPharmacie';
import Login from 'views/auth/LoginPharmacie';
import LoginClient from '../../views/auth/Login';
import { useSelector } from 'react-redux';
import TableDropdown from '../Dropdowns/TableDropdown';
import Register from 'views/auth/Register';
// components



export default function Navbar(props) {
  const countPanier = useSelector(state => state.panierCount)
  const [navbarOpen, setNavbarOpen] = React.useState(false);

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
    
      <nav className="top-0 fixed  z-50 w-full flex flex-wrap items-center justify-between px-5 py-5 bg-blueGray-800 navbar-expand-lg">
       
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <div style={{color:'white', fontFamily:'fantasy', fontSize:'40px', marginTop:'05px',  lineHeight: '1.5'}}>
      <i class="fas faLocationCheck"></i> PHARMACHECK
      </div>
      <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              
            </Link>
      <button
        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <i className="text-white fas fa-bars"></i>
      </button>
    </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-orange-900 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">


          
               <li className="flex items-center">
               <Controls.Button
               text="Utilisateur"
               variant="outlined"
               className="top_transmitv_cart text-white text-sm font-bold"
               onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
             />
             </li>
            
              
              <li className="flex items-center">
                <Controls.Button
                  text="Partenaire"
                  variant="outlined"
                  
                  className="top_transmitv_cart text-white text-sm font-bold"
                  onClick={() => { setOpenPopup1(true); setRecordForEdit1(null); }}
                />

              </li>

              <li className="flex items-center">
                <Link to={"/acceuil/panier"}>
                <button
                  className="top_transmitv_cart text-white text-sm font-bold"
                  type="button"
                >
                  <i className="fas fa-shopping-cart fa-2x"></i>  <span style={{fontWeight: 'bold'} } className=" text-white p-3 text-center inline-flex items-center justify-center w-4 h-4  shadow-lg rounded-full bg-transparent">{countPanier.count}</span>
                </button>
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      <Popup
      title="Utilisateur"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
    >
      <LoginClient
        recordForEdit={recordForEdit}
        addOrEdit={addOrEdit} />
        <Register
        recordForEdit={recordForEdit}
        addOrEdit={addOrEdit}/>
    </Popup>
      <Popup1
        title="Pharmacie"
        openPopup1={openPopup1}
        setOpenPopup1={setOpenPopup1}
      >
        <Login
          recordForEdit1={recordForEdit1}
          addOrEdit1={addOrEdit1} />
        <RegisterPharmacie
          recordForEdit1={recordForEdit1}
          addOrEdit1={addOrEdit1} />


      </Popup1>
    </>
  );
}
