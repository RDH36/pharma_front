import Controls from "components/controls/Controls";
import Popup from "components/Popup";
import React, { useState } from "react";
import Apropos from "./Apropos";

export default function FooterAdmin() {
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);

  const addOrEdit = (employee, resetForm) => {
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
  };
  return (
    <>
      <footer className="left-0 block py-4 ">
        <div className="container left-0 mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
             
              <h4 className="text-lg mt-0 mb-2 text-blueGray-600">
                Contacter nous sur cette plateforme
              </h4>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
          </div>

          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer-admin"
                  className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                >
                  PharmaCheck
                </a>
              </div>
            </div>
          </div>
        </div>

        <Popup
          title="Confidentialité"
          className="z-40"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <Apropos recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
        </Popup>
      </footer>
    </>
  );
}
