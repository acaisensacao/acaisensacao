import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
// import { IoMenu } from "react-icons/io5";
import DropdownMenu from '../DropdownMenu/index';


function Header() {
  return (
    <div className='header'>
         <nav className="menu">
                    <a  ></a>
                    <div className="divlogo">
                         <Link to="/" className="logo"> <img src={logo}></img></Link>
                    </div>
                    <div className="div-list">
                        <ul>
                        <li><Link className="item-menu" to="/">Início</Link></li>
                        <li><Link className="item-menu" to="/cardapio">Cardápio</Link></li>
                        <li><Link className="item-menu" to="/contatos">Contatos/Localização</Link></li>
                        <a href="https://api.whatsapp.com/send?phone=5574988519565&text=Vim%20pelo%20Site!%20Me%20encaminha%20o%20card%C3%A1pio,%20por%20favor!"><button> Fazer Pedido</button></a>
                  
                        </ul>
                    </div>
              
        
                </nav> 
                <DropdownMenu/>
    </div>
  )
}

export default Header
