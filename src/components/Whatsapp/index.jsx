import './styles.css'
import whatsapp from '../../assets/whatsapp.png';

export default function Whatsapp() {
  return (
    < div className='whatsapp'>

   <a href="https://api.whatsapp.com/send?phone=5574988519565&text=Vim%20pelo%20Site!%20Me%20encaminha%20o%20card%C3%A1pio,%20por%20favor!"> <img src={whatsapp} alt="" className='icon-whatsapp'/> </a>

    </div>
  )
}


