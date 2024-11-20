import * as C from './styles';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Whatsapp from '../../components/Whatsapp'




function Home(){
    
    return (
        <C.Container>
            <div className='home'>
                <Header/>
                <Footer/>
                <Whatsapp/>

                

            </div>
         </C.Container>

      
    
    )
}

export default Home

