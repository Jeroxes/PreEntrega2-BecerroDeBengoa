import React from 'react'
import "./CartWidget.css"
import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)



  return (

    <div>
      <Link to="/cart">
        <img className='CarritoIcono' src="https://www.pngitem.com/pimgs/m/521-5216062_shopping-cart-transparent-background-shopping-cart-icon-png.png" alt="" /> 
        </Link>
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
        
        
    </div>
  )
}

export default CartWidget