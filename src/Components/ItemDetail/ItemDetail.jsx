import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({id,nombre,precio,img,stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    console.log("Productos agregados:" + cantidad)


    const item = {id, nombre, precio}
    agregarAlCarrito(item, cantidad)
}

    
    return (
      <div className='contenedorItem'>
          <img src={img} alt={nombre}/>
          <h2>Nombre: {nombre}</h2>
          <h3>Precio: {precio}</h3>
          <p>ID: {id}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem?</p>

          {
            agregarCantidad > 0 ? (<Link to="/cart">Terminar compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
          }
  
      </div>
    )
  }

export default ItemDetail