import Slider from 'components/caroussel/Slider'
import Navbar from 'components/Navbars/AuthNavbar'
import React, { Component } from 'react'
import Footer from './Footer'

export class Apropos extends Component {
  render() {
    return (
      <>
        
          <section className="client">

            <div className="w-full lg:w-12/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Apropos
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      - Le développement de l’application PharmaCheck a été décidé dans
                      l’idée de faciliter la gestion d’une crise sanitaire au niveau de chaque région d’un pays.
                    </li>


                    <li>

                      - Application de recherche medicament rapide avec localisation Pharmaceutique proche de vous.

                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Term et Conditions
                  </span>
                  <ul className="list-unstyled">
                    <li>

                      -	Nous déclinons par rapport aux descriptions des médicaments fournies par les pharmacies

                    </li>
                    <li>

                      -	Nous déclinons les responsabilités sur les annulations de commande ou les commandes invalides

                    </li>
                    <li>

                      -	Les entités utilisant l’application acceptent de nous confier leurs bases de données (pharmacie) et ordonnances (grand public).

                    </li>

                  </ul>
                </div>
              </div>
            </div>


          </section>
      
        
      </>
    )
  }
}

export default Apropos