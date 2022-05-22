import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
      <div className="header">
          <Link to="/" className='homeLink'><img src={logo} alt="Logo Kasa" /></Link>
          <nav>
            <Link to="/" className='homeLink'>Accueil</Link>
            <Link to="/apropos" className='aboutLink'>A propos</Link>
        </nav>
          
       
        
      </div>
    );
  }
  
  export default Header;