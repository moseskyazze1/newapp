import logo from './logo.svg';
import './App.css';
import Navbar from'./components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';



import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from './components/about';
import {BrowserRouter, Routes, Route} from  'react-router-dom';
import Home from './components/home';
import Admin from './components/admin';
import GlobalProvider from "./state/globalProvider";
import Cart from './components/cart';


function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      
      <Footer/>
      
    </div>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
