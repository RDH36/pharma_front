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
}) => {
  const nomInfo = nom ? (
    <FirstColumn>{nom}</FirstColumn>
  ) : (
    <FirstColumn>Nom pharmacie non defini</FirstColumn>
  );
  const adresseInfo = adresse ? (
    <TableBody>{adresse}</TableBody>
  ) : (
    <TableBody>adresse non défini</TableBody>
  );
  const telephoneInfo = telephone ? (
    <TableBody>{telephone}</TableBody>
  ) : (
    <TableBody>N° telephone non défini</TableBody>
  );
  const mailInfo = mail ? (
    <TableBody>{mail}</TableBody>
  ) : (
    <TableBody>Mail non defini</TableBody>
  );
  const nifInfo = nif ? (
    <TableBody>{nif}</TableBody>
  ) : (
    <TableBody>NIF non défini</TableBody>
  );
  const statInfo = stat ? (
    <TableBody>{stat}</TableBody>
  ) : (
    <TableBody>Quantite restante non défini</TableBody>
  );

  if (children) {
    return (
      <tr>
        {nomInfo}
        {adresseInfo}
        {telephoneInfo}
        {mailInfo}
        {nifInfo}
        {statInfo}
      </tr>
    );
  }
};
export default rowPharmacie;
