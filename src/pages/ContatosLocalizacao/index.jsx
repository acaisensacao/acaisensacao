import './styles.css'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import Whatsapp from '../../components/Whatsapp/index'




function Contatos(){
    
    return (
        <div className='contatos'>
            <div className='div-contatos'>
                <Header/>
                <div className='espaco'></div>
                <Footer className="contatos-localizacao" />
                <Whatsapp/>

                

            </div>
         </div>

      
    
    )
}

export default Contatos

