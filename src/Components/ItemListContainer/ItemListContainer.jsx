import { useState, useEffect } from "react"
import { getPokemons, getPokemonsPorCategorias } from "../../asynmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [pokemons, setPokemons] = useState([]);

    const{idCategoria} = useParams()

    useEffect(()=>{
        const funcionPokemons = idCategoria ? getPokemonsPorCategorias : getPokemons;
        funcionPokemons(idCategoria)
        .then(res => setPokemons(res))
    }, [idCategoria])

  return (
    <>
          <h2 style={{textAlign: "center"}}>Mis Pokemons</h2>
          <ItemList pokemons={pokemons}/>

    </>
    
  )
}

export default ItemListContainer