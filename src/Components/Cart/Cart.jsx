import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"



const Cart = () => {
    const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return(
            <>
                <h2>No hay pokemons en el carrito. Comprame alguno que tan tristes si no.</h2>
                <Link to="/">Ver Pokemons </Link>
            </>
        )
    }




  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.id} {...producto}/>)
        }

        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=> vaciarCarrito}> Vaciar Carrito </button>
        <Link to="/checkout">Finalizar Compra</Link>

    </div>
  )
}

export default Cart