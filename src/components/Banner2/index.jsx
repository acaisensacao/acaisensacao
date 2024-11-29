import './styles.css'
import banner2 from '../../assets/banner2.png';



function Banner2 () {
  return (
    <div className='banner2' >
       
        <img src={banner2} className="banner2-2" ></img>
        <div className='texto'>
          <h2>Sobre Nós</h2>
          <p>Somos um DELIVERY de açaí dedicado a proporcionar a melhor experiência aos nossos clientes. <br></br>
            Aqui, cada copo é feito com capricho e atenção aos detalhes, utilizando apenas ingredientes frescos e de alta qualidade. <br></br>
            Acreditamos que a combinação de sabor e nutrição é fundamental, e por isso buscamos sempre novas opções e combinações criativas.<br></br>
            Na nossa açaiteria, o açaí é mais do que um simples produto; é uma paixão. <br></br>Selecionamos as melhores frutas, 
            garantindo que cada porção seja rica em sabor e nutrientes.<br></br>
            <p className='texto2'> Nossos clientes podem escolher entre diferentes combinações,
            com toppings variados, desde granola e frutas frescas até leite condensado e calda de chocolate. <br></br>A variedade de opções permite que cada pessoa personalize seu açaí,
            tornando cada pedido único e especial.</p></p>
        </div>
      
      
    </div>
  )
}

export default Banner2

