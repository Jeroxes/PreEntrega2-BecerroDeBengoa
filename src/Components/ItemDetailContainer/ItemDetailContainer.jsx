import React, { useEffect, useState } from 'react'
import { getUnPokemon } from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

  const [pokemon, setPokemon] = useState(null)



  const {idItem} = useParams()

    useEffect(()=>{
          getUnPokemon(idItem)
            .then(respuesta => setPokemon(respuesta))
    }, [idItem])





  return (
    <div>
      <ItemDetail {...pokemon}/>
    </div>
  )
}

export default ItemDetailContainer


