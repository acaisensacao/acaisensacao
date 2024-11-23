import * as C from './styles';
import banner1 from '../../assets/banner1.png';

import { TbHandClick } from "react-icons/tb";


function Banner1() {
  return (
    <C.Container>
       
        <img src={banner1} className="banner1" ></img>
        
        <div className="monte">
           <a href="https://api.whatsapp.com/send?phone=5574988519565&text=Vim%20pelo%20Site!%20Me%20encaminha%20o%20card%C3%A1pio,%20por%20favor!" className='fazer-pedido'><h2>Faça seu Pedido!</h2>
           <TbHandClick className="click" /></a>
        </div>
      
    </C.Container>
  )
}

export default Banner1

