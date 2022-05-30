import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardAddProduct from "components/Cards/CardAddProduct.js";
import RowUser from "components/PartiesTable/RowUser";
import TableHeader from "components/PartiesTable/TableHeader";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { CLIENT_LISTE } from "views/auth/redux/reducer/AdminReducer";
import { userSlice } from "views/auth/redux/reducer/UserReducer";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  //pour l'affichage
  const dispacth = useDispatch();
  const utilisateur = useSelector((state) => state.utilisateur);
  useEffect(() => {
    axios
      .get("http://localhost:8083/utilisateur/listeInscrit")
      .then((response) => {
        dispacth(CLIENT_LISTE(response.data));
      });
  }, []);

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        onLoad={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Liste utilisateur</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <TableHeader>Nom</TableHeader>
                      <TableHeader>Prénom</TableHeader>
                      <TableHeader>Adresse</TableHeader>
                      <TableHeader>Telephone</TableHeader>
                      <TableHeader>Mail</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    {utilisateur.map((liste) => (
                      <RowUser
                        nom={liste.nom}
                        prenom={liste.prenom}
                        adresse={liste.adresse}
                        telephone={liste.telephonne}
                        mail={liste.email}
                      >
                        idUtilisateur
                      </RowUser>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
