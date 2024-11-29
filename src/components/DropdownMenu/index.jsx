
import './styles.css'

import {Link} from 'react-router-dom';
import { SiIfood } from "react-icons/si";
// import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";


const Dropdown = () => {

    
    

    return(
        <div className="navbar" >
            <div >
                <ul> 
                    <li><Link className="item" to="/cardapio"><BiFoodMenu className='icons'/> Cardápio</Link></li>
                    <div className="line-list-menu"></div>  
                    <li><Link className="item" to="/contatos"><MdOutlineMail className='icons'/> Contatos</Link></li>
                    <div className="line-list-menu"></div>
                    <li><Link className="item" to="/contatos"><IoLocationOutline className='icons'/>Localização</Link></li>
                    <div className="line-list-menu"></div>
                    <div className='div-icons'>
                        <li><Link  to="https://www.instagram.com/acaiisensacao?igsh=ZG90YWh2enB6OGgx"><FaInstagram className='icons'/></Link></li>
                        {/* <li><a href="" ><RiFacebookCircleLine className="icons"/></a></li> */}
                        <li><Link to="https://www.ifood.com.br/delivery/juazeiro-ba/acai-sensacao-02-centro/22389e4f-b293-4052-8539-b2fd3875a081?UTM_Medium=share"><SiIfood className='icons' /></Link></li>
                     </div>
                     <div className="line-list-menu"></div>
                    </ul>
           </div>
        </div>

         
    )
}



export default Dropdown

