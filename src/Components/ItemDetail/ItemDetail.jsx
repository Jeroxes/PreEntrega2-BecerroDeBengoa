import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id,nombre,precio,img}) => {
    
    return (
      <div className='contenedorItem'>
          <img src={img} alt={nombre}/>
          <h2>Nombre: {nombre}</h2>
          <h3>Precio: {precio}</h3>
          <p>ID: {id}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem?</p>
  
      </div>
    )
  }

export default ItemDetail