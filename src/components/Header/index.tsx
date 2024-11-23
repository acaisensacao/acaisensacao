import {Link} from 'react-router-dom';
import * as C from './styles';
import logo from '../../assets/logo.png';
import { IoMenu } from "react-icons/io5";
import DropdownMenu from '../DropdownMenu';









const Header = () => {

    // const Show = () =>{
    //     const navListMenu = document.querySelector(".navbar");
        
    //    if (navListMenu.style.display == "flex")
    //    {
    //       navListMenu.style.display = "none";
         
    //    } else {
    //      navListMenu.style.display = "flex";

    //   }

    // }
 

    return (
        <C.Container>
                <nav className="menu">
                    <a  ><IoMenu  className="mobile-menu"/></a>
                    <div className="divlogo">
                         <Link to="/" className="logo"> <img src={logo}></img></Link>
                    </div>
                    <div className="div-list">
                        <ul>
                        <li><Link className="item-menu" to="/">Início</Link></li>
                        <li><Link className="item-menu" to="/cardapio">Cardápio</Link></li>
                        <li><a className="item-menu" id='contatos-localizacao-footer' href="#footer">Contatos/Localização</a></li>
                        <li><Link className="item-menu" id='contatos-localizacao-cardapio' to="/contatoselocalizacao">Contatos/Localização</Link></li>
                        <a href="https://api.whatsapp.com/send?phone=5574988519565&text=Vim%20pelo%20Site!%20Me%20encaminha%20o%20card%C3%A1pio,%20por%20favor!"><button> Fazer Pedido</button></a>
                  
                        </ul>
                    </div>
              
          {/*  */}
                </nav> 
                <DropdownMenu />
        </C.Container>
         
                

        
    )

}



export default Header