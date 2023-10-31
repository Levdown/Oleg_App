import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';
import CartPovider from './CardContext'
import TgButton from './components/TgButton'

import logo from "./photo/Group-9533.webp"

function App() {
  return (
    <CartPovider>
      <Container>
        <img src={logo} className='imgLogo'></img>
        {/* <NavbarComponent></NavbarComponent> */}

          <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Store></Store>}> </Route>
                <Route path="success" element={<Success> </Success>}> </Route>
                <Route path="cancel" element={<Cancel> </Cancel>}> </Route>
            </Routes>
          </BrowserRouter>
          <TgButton></TgButton> 
        {/* <TgButton></TgButton> */}
          
      </Container>
    </CartPovider>
  );
}

export default App;
