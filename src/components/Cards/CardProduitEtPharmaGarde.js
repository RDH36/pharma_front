import TableauListeGarde from 'components/tableau/TableauListeGarde'
import React from 'react'
import TableauListeProduitPharma from "components/tableau/TableauListeProduitPharma";

function CardProduitEtPharmaGarde() {
  return (
    <>
    <section className="relative py-20">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
      style={{ transform: "translateZ(0)" }}
    >

    </div>

    <div className="container mx-auto px-4">
      
        <h3 class="hny-title mb-0 text-center">RETROUVER VOTRE <span>PRODUIT</span> ICI</h3>
        <TableauListeProduitPharma></TableauListeProduitPharma>
    </div>
  </section>



  <section className="pb-20 absolute block content-5-main">
  

    <div className="container mx-auto px-4 lg:pt-24">
    <h3 class="hny-title mb-0 text-center">PHARMACIE DE <span>GARDE</span></h3>
    <TableauListeGarde/>
      
    </div>
  </section>
    </>
  )
}

export default CardProduitEtPharmaGarde