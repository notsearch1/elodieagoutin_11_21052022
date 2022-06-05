import Footer from "../Footer";
import Header from "../Header";
import { useFetch } from "../../utils/hooks";
import Carousel from "../Carousel/Carousel";
import "../../styles/Lease.css";
import "../../styles/Dropdown.css";
import { useParams } from "react-router-dom";
import { Loader } from "../../utils/Atoms.jsx";
import Stars from "../Stars";




function Lease() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`../../../datas/datas.json`);
  const dataArr = []
  const openDesc = (e) => {
    e.target.classList.toggle("rotate");
    e.target.closest(".dropdown-title").nextSibling.classList.toggle("block");
    e.target.closest(".dropdown-title").classList.toggle("updateMargin");
  };
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      dataArr.push(data[i])
    }
  }

  if (error) {
    return (
      <span className="error">Un problème est survenu lors du téléchargement des images</span>
    );
  }
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Carousel data={data} />
          <div className="information-section">
            <h1 className="lease-title">{dataArr[0].title}</h1>
            <span className="lease-location">{dataArr[0].location}</span>
              <div className="tag">
                <ul className="tag-list">
                  {dataArr.map(({ tags }) => {
                    return tags.map((tag) => {
                      return (
                        <li className="tag-item" key={tag}>
                          {tag}
                        </li>
                      );
                    });
                  })}
                </ul>
              </div>
            <div className="title-container">
              <ul className="star-container">
                <Stars number={dataArr[0].rating} />
              </ul>
              <figure className="host-container">
                <figcaption className="host-name">
                  {dataArr[0].host.name}
                </figcaption>
                <img
                  src={dataArr[0].host.picture}
                  alt={dataArr[0].host.name}
                  className="host-img"
                />
              </figure>
            </div>
            <section className="dropdown-section">
              <div className="dropdown-container">
              <div className="dropdown-title">
                <h2 className="dropdown-title-text">Description</h2>
                <span>
                  <i
                    className="fa-solid fa-angle-down"
                    onClick={(e) => openDesc(e)}
                  ></i>
                </span>
              </div>
              {dataArr.map(({ description }) => {
                return <p className="dropdown-text">{description}</p>  
                }
              )}
              </div>
              <div className="dropdown-container">
            <div className="dropdown-title">
                <h2 className="dropdown-title-text">Equipements</h2>
                <span>
                  <i
                    className="fa-solid fa-angle-down"
                    onClick={(e) => openDesc(e)}
                    ></i>
                </span>
            </div>
            <ul className="equipement-list dropdown-text">
              {dataArr.map(({ equipments }) => {
                return equipments.map((equipment) => {
                  return (
                    <li className="equipement-item" key={equipment}>
                      {equipment}
                    </li>
                  );
                });
              })}
            </ul>
              </div>
            </section>
        </div> 
      </div>
  )}
      <Footer />
    </div>
)}

export default Lease;
