import { React } from "react"
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.scss';

function Header() {
   return (
     <header className="header">
      <div className="header-logo">
       <Link to="/">
        <img src={logo} alt="Logo de Kasa" className="logo-image" />
       </Link>
      </div>
     </header>
   )
}