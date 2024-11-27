
import './styles.css'

import {Link} from 'react-router-dom';
// import { SiIfood } from "react-icons/si";
// // import { RiFacebookCircleLine } from "react-icons/ri";
// import { FaInstagram } from "react-icons/fa";
// import { BiFoodMenu } from "react-icons/bi";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineMail } from "react-icons/md";


const Dropdown = () => {

    
    

    return(
        <div className="navbar" >
            <div >
                <ul> 
                    <li><Link className="item" to="/cardapio"> Cardápio</Link></li>
                    <div className="line-list-menu"></div>  
                    <li><a className="item" href="/contatoselocalizaca"> Contatos</a></li>
                    <div className="line-list-menu"></div>
                    <li><a className="item" href="#footer">Localização</a></li>
                    <div className="line-list-menu"></div>
                    <div className='div-icons'>
                        <li><a  href="https://www.instagram.com/acaiisensacao?igsh=ZG90YWh2enB6OGgx"></a></li>
                        {/* <li><a href="" ><RiFacebookCircleLine className="icons"/></a></li> */}
                        <li><a href="https://www.ifood.com.br/delivery/juazeiro-ba/acai-sensacao-02-centro/22389e4f-b293-4052-8539-b2fd3875a081?UTM_Medium=share"></a></li>
                     </div>
                     <div className="line-list-menu"></div>
                    </ul>
           </div>
        </div>

         
    )
}



export default Dropdown

