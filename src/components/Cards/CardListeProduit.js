import TableauListeGarde from "components/tableau/TableauListeGarde";
import TableauListePharmaOuvert from "components/tableau/TableauListePharmaOuvert";
import React from "react";

export default function CardListeProduit() {
  return (
    <>
      <section className="w3l-ecommerce-main">
        <div className="ecom-contenthny py-5">
          <div className="container py-lg-5">
            <h3 className="hny-title mb-0 text-center">
              Trouver et Acheter votre <span>Produit</span>
            </h3>

            <div className="ecom-products-grids row mt-lg-5 mt-3">
              <div className="col-lg-3 col-6 product-incfhny mt-4">
                <div className="product-grid2 transmitv">
                  <div className="product-image2">
                    <a href="#">
                      <img
                        className="pic-1 img-fluid"
                        src="assets/images/shop-1.jpg"
                      />
                      <img
                        className="pic-2 img-fluid"
                        src="assets/images/shop-1.jpg"
                      />
                    </a>

                    <div className="transmitv single-item">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input
                          type="hidden"
                          name="transmitv_item"
                          value="Women Maroon Top"
                        />
                        <input type="hidden" name="amount" value="899.99" />
                        <button
                          type="submit"
                          className="transmitv-cart ptransmitv-cart add-to-cart"
                        >
                          Ajouter au Panier
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">Claradol </a>
                    </h3>
                    <span className="price">899.99 Ar</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 product-incfhny mt-4">
                <div className="product-grid2">
                  <div className="product-image2">
                    <a href="#">
                      <img
                        className="pic-1 img-fluid"
                        src="assets/images/shop-2.jpg"
                      />
                      <img
                        className="pic-2 img-fluid"
                        src="assets/images/shop-2.jpg"
                      />
                    </a>
                    <ul className="social">
                      <li>
                        <a href="#" data-tip="Quick View">
                          <span className="fa fa-eye"></span>
                        </a>
                      </li>

                      <li>
                        <a href="#" data-tip="Ajouter au Panier">
                          <span className="fa fa-shopping-bag"></span>
                        </a>
                      </li>
                    </ul>
                    <div className="transmitv single-item">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input
                          type="hidden"
                          name="transmitv_item"
                          value="Men's Pink Shirt"
                        />
                        <input type="hidden" name="amount" value="599.99" />
                        <button
                          type="submit"
                          className="transmitv-cart ptransmitv-cart add-to-cart"
                        >
                          Ajouter au Panier
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">Men's Pink Shirt </a>
                    </h3>
                    <span className="price">
                      <del>$775.00</del>$599.99
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 product-incfhny mt-4">
                <div className="product-grid2">
                  <div className="product-image2">
                    <a href="#">
                      <img
                        className="pic-1 img-fluid"
                        src="assets/images/shop-3.jpg"
                      />
                      <img
                        className="pic-2 img-fluid"
                        src="assets/images/shop-3.jpg"
                      />
                    </a>
                    <ul className="social">
                      <li>
                        <a href="#" data-tip="Quick View">
                          <span className="fa fa-eye"></span>
                        </a>
                      </li>

                      <li>
                        <a href="#" data-tip="Ajouter au Panier">
                          <span className="fa fa-shopping-bag"></span>
                        </a>
                      </li>
                    </ul>
                    <div className="transmitv single-item">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input
                          type="hidden"
                          name="transmitv_item"
                          value="Dark Blue Top"
                        />
                        <input type="hidden" name="amount" value="799.99" />
                        <button
                          type="submit"
                          className="transmitv-cart ptransmitv-cart add-to-cart"
                        >
                          Ajouter au Panier
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">Dark Blue Top </a>
                    </h3>
                    <span className="price">
                      <del>$875.00</del>$799.99
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 product-incfhny mt-4">
                <div className="product-grid2">
                  <div className="product-image2">
                    <a href="#">
                      <img
                        className="pic-1 img-fluid"
                        src="assets/images/shop-4.jpg"
                      />
                      <img
                        className="pic-2 img-fluid"
                        src="assets/images/shop-4.jpg"
                      />
                    </a>
                    <ul className="social">
                      <li>
                        <a href="#" data-tip="Quick View">
                          <span className="fa fa-eye"></span>
                        </a>
                      </li>

                      <li>
                        <a href="#" data-tip="Ajouter au Panier">
                          <span className="fa fa-shopping-bag"></span>
                        </a>
                      </li>
                    </ul>
                    <div className="transmitv single-item">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input
                          type="hidden"
                          name="transmitv_item"
                          value="Women Tunic"
                        />
                        <input type="hidden" name="amount" value="399.99" />
                        <button
                          type="submit"
                          className="transmitv-cart ptransmitv-cart add-to-cart"
                        >
                          Ajouter au Panier
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">Women Tunic </a>
                    </h3>
                    <span className="price">
                      <del>$475.00</del>$399.99
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 product-incfhny mt-4">
                <div className="product-grid2">
                  <div className="product-image2">
                    <a href="#">
                      <img
                        className="pic-1 img-fluid"
                        src="assets/images/shop-5.jpg"
                      />
                      <img
                        className="pic-2 img-fluid"
                        src="assets/images/shop-5.jpg"
                      />
                    </a>
                    <ul className="social">
                      <li>
                        <a href="#" data-tip="Quick View">
                          <span className="fa fa-eye"></span>
                        </a>
                      </li>

                      <li>
                        <a href="#" data-tip="Ajouter au Panier">
                          <span className="fa fa-shopping-bag"></span>
                        </a>
                      </li>
                    </ul>
                    <div className="transmitv single-item">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input
                          type="hidden"
                          name="transmitv_item"
                          value="Yellow T-Shirt"
                        />
                        <input type="hidden" name="amount" value="299.99" />
                        <button
                          type="submit"
                          className="transmitv-cart ptransmitv-cart add-to-cart"
                        >
                          Ajouter au Panier
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">Yellow T-Shirt</a>
                    </h3>
                    <span className="price">
                      <del>$575.00</del>$299.99
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 product-incfhny mt-4">
                <div className="product-grid2">
                  <div className="product-image2">
                    <a href="#">
                      <img
                        className="pic-1 img-fluid"
                        src="assets/images/shop-6.jpg"
                      />
                      <img
                        className="pic-2 img-fluid"
                        src="assets/images/shop-6.jpg"
                      />
                    </a>
                    <ul className="social">
                      <li>
                        <a href="#" data-tip="Quick View">
                          <span className="fa fa-eye"></span>
                        </a>
                      </li>

                      <li>
                        <a href="#" data-tip="Ajouter au Panier">
                          <span className="fa fa-shopping-bag"></span>
                        </a>
                      </li>
                    </ul>
                    <div className="transmitv single-item">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input
                          type="hidden"
                          name="transmitv_item"
                          value="Straight Kurta"
                        />
                        <input type="hidden" name="amount" value="699.99" />
                        <button
                          type="submit"
                          className="transmitv-cart ptransmitv-cart add-to-cart"
                        >
                          Ajouter au Panier
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">Straight Kurta </a>
                    </h3>
                    <span className="price">
                      <del>$775.00</del>$699.99
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 product-incfhny mt-4">
                <div className="product-grid2">
                  <div className="product-image2">
                    <a href="#">
                      <img
                        className="pic-1 img-fluid"
                        src="assets/images/shop-7.jpg"
                      />
                      <img
                        className="pic-2 img-fluid"
                        src="assets/images/shop-7.jpg"
                      />
                    </a>
                    <ul className="social">
                      <li>
                        <a href="#" data-tip="Quick View">
                          <span className="fa fa-eye"></span>
                        </a>
                      </li>

                      <li>
                        <a href="#" data-tip="Ajouter au Panier">
                          <span className="fa fa-shopping-bag"></span>
                        </a>
                      </li>
                    </ul>
                    <div className="transmitv single-item">
                      <div className="transmitv single-item">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input
                            type="hidden"
                            name="transmitv_item"
                            value="Straight Kurta"
                          />
                          <input type="hidden" name="amount" value="699.99" />
                          <button
                            type="submit"
                            className="transmitv-cart ptransmitv-cart add-to-cart"
                          >
                            Ajouter au Panier
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">White T-Shirt </a>
                    </h3>
                    <span className="price">
                      <del>$675.00</del>$599.99
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 product-incfhny mt-4">
                <div className="product-grid2">
                  <div className="product-image2">
                    <a href="#">
                      <img
                        className="pic-1 img-fluid"
                        src="assets/images/shop-8.jpg"
                      />
                      <img
                        className="pic-2 img-fluid"
                        src="assets/images/shop-8.jpg"
                      />
                    </a>
                    <ul className="social">
                      <li>
                        <a href="#" data-tip="Quick View">
                          <span className="fa fa-eye"></span>
                        </a>
                      </li>

                      <li>
                        <a href="#" data-tip="Ajouter au Panier">
                          <span className="fa fa-shopping-bag"></span>
                        </a>
                      </li>
                    </ul>
                    <div className="transmitv single-item">
                      <div className="transmitv single-item">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input
                            type="hidden"
                            name="transmitv_item"
                            value="Straight Kurta"
                          />
                          <input type="hidden" name="amount" value="699.99" />
                          <button
                            type="submit"
                            className="transmitv-cart ptransmitv-cart add-to-cart"
                          >
                            Ajouter au Panier
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">Blue Sweater</a>
                    </h3>
                    <span className="price">
                      <del>$575.00</del>$499.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h3 className="hny-title mb-0 text-center">
        Rechercher votre <span>Pharmacie</span> ici
      </h3>
      <section className="w3l-content-5">
        <div className="content-5-main">
          <div className="container">
            <div className="content-info-in row">
              <div className="col-12 ">
                <TableauListeGarde />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
