import './styles.css'
// import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import copos from '../../assets/copos.png';
import fundo from '../../assets/fundo.png';
// import { IoMdClose } from "react-icons/io";
import Header from '../../components/Header';
import Whatsapp from '../../components/Whatsapp'


export default function Cardapio() {
  return (
    
    <div className='cardapio'>
      <Header/>
      
      <img className='fundo' src={fundo}></img>
    <div className='div-cardapio'>
    
    {/* <Link to="/"><IoMdClose  className='close'/></Link> */}
        
        <img className="logo-cardapio" src={logo}></img>
   
   
        <div className="copos">
          <div className="img-copos">
            <img className="img-copos-1"src={copos}></img>
            <h1> Copo 300ml</h1>
            <div className="img-copos-preco">
              <h2>15,00</h2>
            </div>
          </div>
          
          <div className="img-copos">
            <img className="img-copos-2"src={copos}></img>
            <h1> Copo 500ml</h1>
            <div className="img-copos-preco">
              <h2>20,00</h2>
            </div>
          </div>
          
          <div className="img-copos">
            <img className="img-copos-3"src={copos}></img>
            <h1> Copo 700ml</h1>
            <div className="img-copos-preco">
              <h2>25,00</h2>
            </div>
          </div>
          
        </div>
        
       <div className="acompanhamentos">
                <div className="acompanhamentos-1">
                  <div className="acompanhamentos-1-1">
                      <h2> Coberturas  ( máx 1 )</h2>
                      <ul className="list">
                      <li className="list-item">Leite Condensado</li>
                      <li className="list-item">Calda de Morango</li>
                      <li className="list-item">Calda de Chocolate</li>
                      </ul>
                  </div>
                
                  <div className="acompanhamentos-1-1">
                      <h2> Frutas ( máx 1 )</h2>
                      <ul className="list">
                      <li className="list-item">Banana</li>
                      <li className="list-item">Kiwi</li>
                      <li className="list-item">Morango</li>
                    
                      </ul>
                  </div>

                  <div className="acompanhamentos-1-1">
                      <h2> Cremes ( máx 1 )</h2>
                      <ul className="list">
                      <li className="list-item">Creme de Avelã</li>
                      <li className="list-item">Creme de Paçoca</li>
                      </ul>
                  </div>
             </div>

                 
                  <div className='divisoria'></div>

                  <div className="acompanhamentos-2">
                      <div className="acompanhamentos-2-1">
                        <h2> Acompanhamentos <br></br> ( A vontade! ) </h2>
                        <ul className="list">
                        <li className="list-item">Granulado</li>
                        <li className="list-item">Granola</li>
                        <li className="list-item">Farofa de Amendoim</li>
                        <li className="list-item">Paçoca</li>
                        <li className="list-item">Confete M&M's</li>
                        <li className="list-item">Leite em pó</li>
                        <li className="list-item">Bolinhas de Chocolate</li>
                        </ul>
                      </div>

                      <div className="acompanhamentos-2-1">
            
                        <h2> Adicionais </h2>
                        <ul className="list">
                        <li className="list-item"> Biscoito Canudinho </li>
                        <li className="list-item"> Bis</li>
                        <li className="list-item"> Frutas</li>
                        <li className="list-item"> Cremes</li>
                        <li className="list-item"> Caldas</li>
                        </ul>
                        <p className="adicional-text"> + R$1,00 <br></br>Cada Adicional</p>
                      </div>
                </div>
      
           
       </div>
       <a href="https://api.whatsapp.com/send?phone=5574988519565&text=Vim%20pelo%20Site!%20Me%20encaminha%20o%20card%C3%A1pio,%20por%20favor!"><button className="button-pedido"> Fazer Pedido</button></a>
       </div>
       <Whatsapp/>

   
    </div>
      
  
  )
}

 

