import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../styles/generalStyle.css";
import "../styles/headerStyle.css";
import { LoginMenu } from './api-authorization/LoginMenu';

import Logo from '../pictures/logo.png';


function Header (props) {
  return (
    <header>
      <div className="flex-container-horizontal">
        <div>
          <h1>Theater Laak</h1>
        </div>
        
        <div>
          <ul>
            <li><a><Link to="/">Startpagina</Link></a></li>
            <li><a><Link to="/voorstellingen">Voorstellingen</Link></a></li>
            <li><a><Link to="/toegankelijkheid">Toegankelijkheid</Link></a></li>
            <li><a><Link to="/contactgegevens">Contactgegevens</Link></a></li>
            <li><a><Link to="/inloggen">Inloggen</Link></a></li>
            <li><a><Link to="/Registreren">Registreren</Link></a></li>
            <li><a></a></li>
            
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;