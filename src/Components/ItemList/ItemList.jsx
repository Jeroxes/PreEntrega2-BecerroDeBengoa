import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({pokemons}) => {
  return (  
      
      <div className='contenedorPokemons'>
            {pokemons.map(item =><Item key={item.id} {...item}/>)}

      </div>

   
  )
}

export default ItemList