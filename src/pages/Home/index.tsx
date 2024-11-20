import * as C from './styles';

import Header from '../../components/Header';
// import DropdownMenu from '../../components/DropdownMenu'
import Letreiro from '../../components/Letreiro';
import Banner1 from '../../components/Banner1';
import Banner2 from '../../components/Banner2';
import Footer from '../../components/Footer';
import Whatsapp from '../../components/Whatsapp';




function Home(){
    
    return (
        <C.Container>
            <div className='home'>
                <Header/>
                <Letreiro/>
               {/* <DropdownMenu/> */}
                <Banner1/>
                <Banner2 />
                <Footer />

            <Whatsapp/>
                

            </div>
         </C.Container>

      
    
    )
}

export default Home

