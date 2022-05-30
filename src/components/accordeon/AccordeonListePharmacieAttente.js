// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion from "@mui/material/Accordion";
// import MuiAccordionSummary from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardAddProduct from "components/Cards/CardAddProduct.js";
// import RowPharmacie from "components/PartiesTable/RowPharmacieAdmin";
// import TableHeader from "components/PartiesTable/TableHeader";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { PHARMACIE_ATTENTE } from "../../views/auth/redux/reducer/AdminReducer";
// import { useEffect } from "react";

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
//   "&:before": {
//     display: "none",
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? "rgba(255, 255, 255, .05)"
//       : "rgba(0, 0, 0, .03)",
//   flexDirection: "row-reverse",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: "1px solid rgba(0, 0, 0, .125)",
// }));

// export default function CustomizedAccordions() {
//   const [expanded, setExpanded] = React.useState("panel1");

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   //pour l'affichage
//   const dispacth = useDispatch();
//   const enAttente = useSelector((state) => state.pharmacieEnAttente);
//   useEffect(() => {
//     axios
//       .get("http://localhost:8083/pharmacie/listPharmacieAttente")
//       .then((response) => {
//         dispacth(PHARMACIE_ATTENTE(response.data));
//       });
//   }, []);

//   return (
//     <div>
//       <Accordion
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//         onLoad={handleChange("panel1")}
//       >
//         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//           <Typography>
//             <form>
//               <label className="px-4">En attente</label>
//               <input
//                 type="text"
//                 className="px-4 md:w-6/12 border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                 placeholder="Rechercher ..."
//                 name="nom"
//                 required
//               />
//               <button
//                 className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                 type="button"
//               >
//                 <i class="fas fa-search"></i>
//               </button>
//             </form>
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             <div className="container px-4 mx-auto">
//               <div className="flex flex-wrap">
//                 <table className="items-center w-full bg-transparent border-collapse">
//                   <thead>
//                     <tr>
//                       <TableHeader>Nom pharmacie</TableHeader>
//                       <TableHeader>Adresse</TableHeader>
//                       <TableHeader>Telephone</TableHeader>
//                       <TableHeader>Mail</TableHeader>
//                       <TableHeader>NIF</TableHeader>
//                       <TableHeader>STAT</TableHeader>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {enAttente.map((liste) => (
//                       <RowPharmacie
//                         nom={liste.nomPharmacie}
//                         adresse={liste.adresse}
//                         telephone={liste.telephonne}
//                         nif={liste.nifPharamacie}
//                         stat={liste.statitPharmacie}
//                         boutonDelete="visible"
//                         boutonAccept="visible"
//                       >
//                         {liste.idPharmacie}
//                       </RowPharmacie>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }
