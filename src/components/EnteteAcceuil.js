import photo from "assets/img/pharmalogo.png";
import Login from 'views/auth/Login';
import React, { useState } from 'react';
import Controls from "./controls/Controls";
import Popup from "./Popup";
import AddIcon from '@material-ui/icons/Add';
import Register from "views/auth/Register";
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import RegisterPharmacie from "views/auth/RegisterPharmacie";
import Popup1 from "./Popup1";
import LoginPharmacie from "views/auth/LoginPharmacie";
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


export default function EnteteAcceuil() {

    const classNamees = useStyles();
    const [openPopup, setOpenPopup] = useState(false)
    const [recordForEdit, setRecordForEdit] = useState(null)


    const addOrEdit = (employee, resetForm) => {

        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)

    }


    const [openPopup1, setOpenPopup1] = useState(false)
    const [recordForEdit1, setRecordForEdit1] = useState(null)

    const addOrEdit1 = (employee, resetForm1) => {

        resetForm1()
        setRecordForEdit1(null)
        setOpenPopup1(false)

    }
    return (
        <>
            <section className="w3l-banner-slider-main">
                <div className="top-header-content">
                    <header className="tophny-header">

                        <div className="container-fluid">
                            <div className="top-right-strip row">

                                <div className="top-hny-left-content col-lg-6 pl-lg-0">

                                </div>
                                <ul className="top-hnt-right-content col-lg-6">


                                    <li className="button-log usernhy">
                                        <a className="btn-open" href="#">
                                            <span className="fa fa-user" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                    <li className="flex items-center">
                                        <Controls.Button
                                            text="Devenir Partenaire"
                                            variant="outlined"
                                            className="top_transmitv_cart"
                                            onClick={() => { setOpenPopup1(true); setRecordForEdit1(null); }}
                                        />

                                    </li>
                                    <li className="transmitvcart galssescart2 cart cart box_1">
                                        <form action="#" method="post" className="last">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="display" value="1" />
                                            <Link to={"/user/panier"}>
                                                <button className="top_transmitv_cart" type="submit" name="submit" value="">
                                                    Mon Panier
                                                    <span className="fa fa-shopping-cart"></span>
                                                </button>
                                            </Link>
                                        </form>
                                    </li>
                                </ul>

                                <Login />
                            </div>
                        </div>

                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid serarc-fluid">
                                <a className="navbar-brand" href="index.html">
                                    <span className="lohny">P</span>harma<span className="lohny">C</span>heck</a>
                                <div className="search-right w-full">

                                    <a href="#search" title="search"><span className="fa fa-search mr-2" aria-hidden="true"></span>
                                        <span className="search-text">recherche</span></a>

                                    <div id="search" className="pop-overlay">
                                        <div className="popup">

                                            <form action="#" method="post" className="search-box">
                                                <input type="search" placeholder="Produit,Pharmacie..." name="search" required="required"
                                                    autofocus="" />
                                                <button type="submit" className="btn">Recherche</button>
                                            </form>

                                        </div>
                                        <a className="close" href="#">×</a>
                                    </div>

                                </div>

                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon fa fa-bars"> </span>
                                </button>

                                <div>

                                </div>
                            </div>
                        </nav>

                    </header>

                    <div className="bannerhny-content">


                        <div className="content-baner-inf">


                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="container">
                                            <div className="carousel-caption">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item item2">
                                        <div className="container">
                                            <div className="carousel-caption">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item item3">
                                        <div className="container">
                                            <div className="carousel-caption">


                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item item4">
                                        <div className="container">
                                            <div className="carousel-caption">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Precedent</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Suivant</span>
                                </a>
                            </div>
                        </div>

                        <div className="right-banner">
                            <div className="right-1">

                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section class="w3l-grids-hny-2">

	<div class="grids-hny-2-mian ">
		<div class="container ">
				
		
			<div class="welcome-grids row mt-5">
				<div class="col-lg-2 col-md-4 col-6">
				</div>
				
				<div class="col-lg-2  col-md-4 col-6">
						
						<h4 className="nav-item active"><a href="#URL">
								ACCEUIL</a></h4>

					
				</div>
				<div class="col-lg-2 col-md-4 col-6">
					<h4>
                        <Link to={"/produit"}>
                            PRODUITS
                        </Link>
                    </h4>
				</div>
				<div class="col-lg-2 col-md-4 col-6">
						
						<h4><a href="#URL">PHARMACIE</a></h4>

				</div>
				<div class="col-lg-2 col-md-4 col-6 ">
				</div>
				<div class="col-lg-2 col-md-4 col-6">
				</div>
			</div>

		</div>
	</div>
</section>

            <Popup1
                title="Inscription Pharmacie"
                openPopup1={openPopup1}
                setOpenPopup1={setOpenPopup1}
            >
            <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4 flex-1">
              <RegisterPharmacie
              recordForEdit1={recordForEdit1}
              addOrEdit1={addOrEdit1} /></div>
              <div className="w-full px-4 flex-1">
              <LoginPharmacie
              recordForEdit1={recordForEdit1}
              addOrEdit1={addOrEdit1} /> </div>
             
            </div>
          </div>

          
            </Popup1>
        </>
    )
}
