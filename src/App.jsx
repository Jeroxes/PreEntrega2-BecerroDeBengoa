import React from 'react'
import NavBar  from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <BrowserRouter> 
      <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        </Routes>
      
      
      
      </BrowserRouter>

</>
  )
}

export default App