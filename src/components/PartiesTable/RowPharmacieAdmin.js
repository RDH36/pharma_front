import React, { Children } from "react";

//components
import TableBody from "components/PartiesTable/TableBody.js";
import FirstColumn from "components/PartiesTable/FirstColumn.js";

const rowPharmacie = ({
  children,
  nom,
  adresse,
  telephone,
  mail,
  nif,
  stat,
  boutonDelete,
  boutonAccept,
}) => {
  const nomInfo = nom ? <FirstColumn>{nom}</FirstColumn> : <div></div>;
  const adresseInfo = adresse ? <TableBody>{adresse}</TableBody> : <div></div>;
  const telephoneInfo = telephone ? (
    <TableBody>{telephone}</TableBody>
  ) : (
    <div></div>
  );
  const mailInfo = mail ? <TableBody>{mail}</TableBody> : <div></div>;
  const nifInfo = nif ? <TableBody>{nif}</TableBody> : <div></div>;
  const statInfo = stat ? <TableBody>{stat}</TableBody> : <div></div>;
  const etatBoutonDeleteInfo = boutonDelete ? (
    <button
      className="bg-red-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
    >
      <i class="fas fa-trash"></i>
    </button>
  ) : (
    <div></div>
  );
  const etatBoutonAcceptInfo = boutonAccept ? (
    <button
      className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
    >
      <i class="fas fa-check"></i>
    </button>
  ) : (
    <div></div>
  );

  if (children) {
    return (
      <>
        {nomInfo}
        {adresseInfo}
        {telephoneInfo}
        {mailInfo}
        {nifInfo}
        {statInfo}
        <TableBody>
          {etatBoutonAcceptInfo}
          {etatBoutonDeleteInfo}
        </TableBody>
      </>
    );
  }
};
export default rowPharmacie;
