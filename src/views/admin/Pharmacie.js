import React from "react";
import CardPharmacie from "components/Cards/CardPharmacie";
import CardProduits from "components/Cards/CardProduits";

export default function Pharmacie() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
        crossorigin="anonymous"
      />

      <div class="card-group row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={require("assets/img/Andohatapenaka.jpg").default}
              className="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={require("assets/img/Andohatapenaka.jpg").default}
              className="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={require("assets/img/Andohatapenaka.jpg").default}
              className="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={require("assets/img/Andohatapenaka.jpg").default}
              className="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <CardPharmacie />
      <CardProduits />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardProduits />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardProduits nomproduits="produit" prixproduits="1000Ariary" />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardProduits nomproduits="produit" prixproduits="1000Ariary" />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardProduits nomproduits="produit" prixproduits="1000Ariary" />
        </div>
      </div>

      <br />
      <br />
      <br />

      <div>Pharmacie ny ato</div>
    </>
  );
}
