import './styles.css'
import Header from '../../components/Header/index'
// import DropdownMenu from '../../components/DropdownMenu'
import Letreiro from '../../components/Letreiro/index';
import Banner1 from '../../components/Banner1/index';
import Banner2 from '../../components/Banner2/index';
import Footer from '../../components/Footer/index';
import Whatsapp from '../../components/Whatsapp/index';




function Home(){
    
    return (
        <div className='home'>
            <div className='div-home'>
                <Header/>
                <Letreiro/>
               {/* <DropdownMenu/> */}
                <Banner1/>
                <Banner2 />
                <Footer id="footer" />

            <Whatsapp/>
                

            </div>
         </div>

      
    
    )
}

export default Home

