export const getPokemons = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(misPokemons)
        }, 2000);
    
    })
}

export const getUnPokemon = (id) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const pokemon = misPokemons.find(item=>item.id === id)
            resolve(pokemon)
        }, 2000)
    })
}


export const getPokemonsPorCategorias =(idCategoria) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            const pokemon = misPokemons.filter(item => item.idCat === idCategoria)
            resolve(pokemon)
        }, 100);
    })
}