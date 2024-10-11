import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';
import Cart from './Components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './Components/Checkout/Checkout';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>


          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={ <h2>Capturando Pokemons, aun no hay suerte</h2> }/>
          </Routes>
        </CarritoProvider>


      </BrowserRouter>

    </>
  );
};

export default App