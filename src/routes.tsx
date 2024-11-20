
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import ContatosLocalizacao from "./pages/ContatosLocalizacao";



export default function AppRoutes(){
    return(
        <BrowserRouter >
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/cardapio" element={ <Cardapio/> }></Route>
                <Route path="/contatoselocalizacao" element={ <ContatosLocalizacao/> }></Route>
               
            </Routes>
        </BrowserRouter>
    );
}




