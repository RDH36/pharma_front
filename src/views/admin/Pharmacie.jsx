import { Link } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import {  useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Product() {    
    const history = useHistory()
    const produit = useSelector(state => state.listeProduit)
    const pharmacie = useSelector(state => state.pharmacieEnAttente)
    const donnePharma = useSelector(state => state.pharmacieConnection)
    const { register, handleSubmit } = useForm();

    const formatDate = () => {
        let d = new Date();
        let month = (d.getMonth() + 1).toString();
        let day = d.getDate().toString();
        let year = d.getFullYear();
        if (month.length < 2) {
          month = '0' + month;
        }
        if (day.length < 2) {
          day = '0' + day;
        }
        return [year, month, day].join('-');
      }
    
    const onSubmit = (pharmacie) => {
        const validation = {
            idPharmacie: pharmacie.idPharmacie,
            nomPharmacie: pharmacie.nomPharmacie,
            nifPharamacie: pharmacie.nifPharamacie,
            statitPharmacie: pharmacie.statitPharmacie,
            etatValidationCompte: pharmacie.etatValidationCompte,
            adresse: pharmacie.adresse,
            telephonne: pharmacie.telephonne,
            email: pharmacie.email,
            motDePasse:pharmacie.motDePasse,
            ormid: pharmacie.ormid
        }
        axios
          .post("http://localhost:8083/admin/validationPharmacie", validation)
          .then((response) => {
              if(response.pharmacie.idApprovisionnement !== null)
                history.push("/admin/pharmacieattente")
          });
      };
console.log(produit.idProduit)
  return (
    <div className="product" style={{marginTop:'110px'}}>
      <div className="productTitleContainer">
        <h1 className="productTitle">Approvissionement</h1>
        <Link to="/newproduct">
          <button className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Ajouté nouveaux Produit</button>
        </Link>
      </div>
      <div className="productBottom">
          <form className="productForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="productFormLeft">
                <label>Nom Produit</label>
                <input type="text" value={produit.nomCommercial} disabled/>
                <label>Classe pharmaceautique</label>
                <input type="text" value={produit.classePharmaceutique} disabled/>
                <label>Dénomination commune internationale</label>
                <input type="text" value={produit.dci} disabled/>
                <label>Prix(Ar)</label>
                <input type="text" Value={produit.stock[0].prixDeVente}  {...register("prixDeVente")} required/>
                <label>Quantite Disponible</label>
                <input type="text" value={produit.stock[0].quantiteDisponible} disabled/>
                <label>Quantite Entrant</label>
                <input type="number" defaultValue='1'  {...register("quantiteEntrant")}/>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://cdn-icons-png.flaticon.com/512/883/883407.png" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Approvisionner</button>
              </div>
          </form>
      </div>
    </div>
  );
}
