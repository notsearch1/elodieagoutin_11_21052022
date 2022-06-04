import { Link } from 'react-router-dom'
import '../../styles/Header.css'


function Header() {
    return (
      <div className="header">
          <Link to="/" className='home-link'>
            <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="Logo Kasa" className='logo' /></Link>
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/apropos" className='aboutLink'>A propos</Link>
          </nav>
          
       
        
      </div>
    ); 
  }
  
  export default Header;