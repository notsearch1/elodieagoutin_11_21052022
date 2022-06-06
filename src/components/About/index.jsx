import "../../styles/About.css";
import Banner from "../Banner";
import Header from "../Header";
import Footer from "../Footer";
import { Fragment } from "react";

function About() {
  const openDesc = (e) => {
    e.target.classList.toggle("rotate");
    e.target.closest(".about-title").nextSibling.classList.toggle("block");
    e.target.closest(".about-title").classList.toggle("updateMargin");
  };

  return (
    <Fragment>
      <div className="container">
        <Header />
        <Banner condition={false} />
        <div className="about">
          <div className="about-item">
            <div className="about-title">
              <h2 className="about-title-text">Fiabilité</h2>
              <span>
                <i
                  className="fa-solid fa-angle-down"
                  onClick={(e) => openDesc(e)}
                ></i>
              </span>
            </div>
            <p className="about-description">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
          <div className="about-item">
            <div className="about-title">
              <h2 className="about-title-text">Respect</h2>
              <span>
                <i
                  className="fa-solid fa-angle-down"
                  onClick={(e) => openDesc(e)}
                ></i>
              </span>
            </div>
            <p className="about-description">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
          <div className="about-item">
            <div className="about-title">
              <h2 className="about-title-text">Service</h2>
              <span>
                <i
                  className="fa-solid fa-angle-down"
                  onClick={(e) => openDesc(e)}
                ></i>
              </span>
            </div>
            <p className="about-description">
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>
          <div className="about-item">
            <div className="about-title">
              <h2 className="about-title-text">Sécurité</h2>
              <span>
                <i
                  className="fa-solid fa-angle-down"
                  onClick={(e) => openDesc(e)}
                ></i>
              </span>
            </div>
            <p className="about-description">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default About;
