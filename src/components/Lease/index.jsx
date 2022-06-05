import Footer from "../Footer";
import Header from "../Header";
import { useFetch } from "../../utils/hooks";
import Carousel from "../Carousel/Carousel";
import "../../styles/Lease.css";
import { useParams } from "react-router-dom";
import { Loader } from "../../utils/Atoms.jsx";
import Stars from "../Stars";
import { useState } from "react";



function Lease() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`../../../datas/datas.json`);
  const dataArr = []
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
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Lease;
