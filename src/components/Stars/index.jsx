import { Fragment } from "react";
import Star from "./star.png";
import ActiveStar from "./star-active.png";

export default function Stars(props) {
  const range = [1, 2, 3, 4, 5];
  const starNumber = props.number;
  const starActive = <img className="star" src={ActiveStar} alt="star" />;
  const star = <img className="star" src={Star} alt="star" />;

  return (
    <Fragment>
      {range.map((rangeElem, index) =>
        starNumber >= rangeElem ? (
          <li key={rangeElem.toString()}>{starActive}</li>
        ) : (
          <li key={rangeElem.toString()}>{star}</li>
        )
      )}
    </Fragment>
  );
}
