import { Link } from "react-router-dom";
import "../../styles/Error.css";
import Header from "../Header";
import Footer from "../Footer";
import { Fragment } from "react";

function Error() {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <div className="error">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="homeLink">
            Revenir sur la page d'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Error;
