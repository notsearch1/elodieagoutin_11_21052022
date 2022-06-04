
import '../../styles/Footer.css'

function Footer() {
    return (
      <div className="footer">
          <img src={process.env.PUBLIC_URL + "/assets/logo-white.png"} alt="" />
          <p>© 2020 Kasa. All rights reserved</p>
        
        
      </div>
    );
  }
  
  export default Footer;