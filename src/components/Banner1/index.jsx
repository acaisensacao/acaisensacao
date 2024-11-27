import './styles.css'
import banner1 from '../../assets/banner1.png';

// import { TbHandClick } from "react-icons/tb";


function Banner1() {
  return (
    <div className='banner1'>
       
        <img src={banner1} className="banner" ></img>
        
        <div className="monte">
           <a href="https://api.whatsapp.com/send?phone=5574988519565&text=Vim%20pelo%20Site!%20Me%20encaminha%20o%20card%C3%A1pio,%20por%20favor!" className='fazer-pedido'><h2>Faça seu Pedido!</h2>
          </a>
        </div>
      
    </div>
  )
}

export default Banner1

