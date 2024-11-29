import { HashRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/index'
import ContatosLocalizacao from './pages/ContatosLocalizacao/index'
import Cardapio from './pages/Cardapio/index'



export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cardapio' element={<Cardapio/>} />
        <Route path='/contatos' element={<ContatosLocalizacao/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </HashRouter>
   
  )
}

