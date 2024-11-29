import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/index'
import ContatosLocalizacao from './pages/ContatosLocalizacao/index'
import Cardapio from './pages/Cardapio/index'



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cardapio' element={<Cardapio/>} />
        <Route path='/contatos' element={<ContatosLocalizacao/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
   
  )
}

