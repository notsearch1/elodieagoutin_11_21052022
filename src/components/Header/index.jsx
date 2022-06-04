import { Link } from 'react-router-dom'
import '../../styles/Header.css'


function Header() {
    return (
      <div className="header">
          <Link to="/" className='homeLink'><img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="Logo Kasa" /></Link>
          <nav>
            <Link to="/" className='homeLink'>Accueil</Link>
            <Link to="/apropos" className='aboutLink'>A propos</Link>
        </nav>
          
       
        
      </div>
    );
  }
  
  export default Header;