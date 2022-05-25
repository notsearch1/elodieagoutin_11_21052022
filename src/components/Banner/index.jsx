
import { useState } from 'react';
import '../../styles/Banner.css'

function Banner(props) {

  const [sloganApp]=useState(props.condition)



  return (
    <div>
      <div className= {sloganApp? "sloganHome slogan-wrapper": "sloganAbout slogan-wrapper"}>
      {sloganApp &&  <h1 className="slogan">Chez vous, partout et ailleurs</h1>}
      </div>
    </div>
  );
}

export default Banner;
