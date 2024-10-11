import { useState, useEffect } from "react"
import { getPokemons, getPokemonsPorCategorias } from "../../asynmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false)

    const{idCategoria} = useParams()

    useEffect(()=>{
      setLoading(true)
        const funcionPokemons = idCategoria ? getPokemonsPorCategorias : getPokemons;

        funcionPokemons(idCategoria)
        .then(res => setProductos(res))
        .catch((error) =>{
          console.log(error)
        })
        .finally(()=>{
          console.log("proceso finalizado")
          setLoading(false)
        })
        
    }, [idCategoria])

  return (
    <>
          <h2 style={{textAlign: "center"}}>Mis Pokemons</h2>
          {loading ? <Loader/> : <ItemList productos = {productos}/>}

    </>
    
  )
}

export default ItemListContainer