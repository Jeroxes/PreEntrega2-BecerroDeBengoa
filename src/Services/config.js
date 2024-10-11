import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByOFRPMcV5cPjrsFWdohbNtrQSCcLf35k",
  authDomain: "tienda-pokemon-96edf.firebaseapp.com",
  projectId: "tienda-pokemon-96edf",
  storageBucket: "tienda-pokemon-96edf.appspot.com",
  messagingSenderId: "431872782854",
  appId: "1:431872782854:web:7f6acd9508b5a2b5450987"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)


const misPokemons =[
    { nombre: "Charmander", stock: 10, precio: 500, img: "../img/Charmander.png", idCat: "evolucion"},
    { nombre: "Digglet", stock: 20, precio: 50, img: "../img/Digglet.png", idCat: "evolucion"},
    { nombre: "Rayquaza", stock: 2, precio: 5000, img: "../img/Rayquaza.png", idCat: "legendarios"},
    { nombre: "Squirtle", stock: 7, precio: 500, img: "../img/Squirtle.jpg", idCat: "evolucion"},
]

import {collection, doc, writeBatch} from "firebase/firestore"

const subirProductos = async () => {
    const batch = writeBatch(db)
    const productosRef = collection(db, "productos")

    misPokemons.forEach((producto)=>{
        const nuevoDoc = doc(productosRef)
        batch.set(nuevoDoc, producto)
    })

    try {
        await batch.commit();
        console.log("productos subidos exitosamente")
    } catch(error){
        console.log("error subiendo los productos:", error)
    }
}

subirProductos()