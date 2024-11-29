
import './styles.css'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GrMap } from "react-icons/gr";
import { SiIfood } from "react-icons/si";

function Footer() {
  return (
    <div className='footer' id='footer'>
     <div className="location-contacts">
         <h2>CONTATOS E LOCALIZAÇÃO</h2>
      </div>
      <div className="div-footer">
          <div className="div-contacts"> 
            <div className='div-text'> <FaWhatsapp />< a href="https://api.whatsapp.com/send?phone=5574988519565&text=Vim%20pelo%20Site!%20Me%20encaminha%20o%20card%C3%A1pio,%20por%20favor!"> (74) 9 8851-9565</a></div>
            <div className='div-text'> <SiIfood />< a href="https://www.ifood.com.br/delivery/juazeiro-ba/acai-sensacao-02-centro/22389e4f-b293-4052-8539-b2fd3875a081?UTM_Medium=share"> Açaí Sensação 02</a></div>
            <div className='div-text'> <MdOutlineEmail /><a href='mailto:acaiisensacao@gmail.com'>acaiisensacao@gmail.com</a></div>
            <div className='div-text'>  <GrMap /><a href='https://maps.app.goo.gl/wq2piqE7qZQ4DPLdA'>Rua Ramiro Ribeiro, N°477, Centro,<br></br> Juazeiro-Ba 48903-645 </a></div>
            
          </div>
          <div>
           <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rua%20Ramiro%20Ribeiro,477,%20coreia,%20juazeiro-BA+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.gps.ie/">gps tracker sport
          </a></iframe>
          </div>
        </div>
      
    </div>
  )
}

export default Footer

