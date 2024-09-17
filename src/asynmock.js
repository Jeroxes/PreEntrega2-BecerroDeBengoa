const misPokemons =[
    {id: "1", nombre: "Charmander", precio: 500, img: "../img/Charmander.png", idCat: "evolucion"},
    {id: "2", nombre: "Digglet", precio: 50, img: "../img/Digglet.png", idCat: "evolucion"},
    {id: "3", nombre: "Rayquaza", precio: 5000, img: "../img/Rayquaza.png", idCat: "legendarios"},
    {id: "4", nombre: "Squirtle", precio: 500, img: "../img/Squirtle.jpg", idCat: "evolucion"},
]

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