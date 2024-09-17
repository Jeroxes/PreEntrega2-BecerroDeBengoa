import React from 'react'
import "./NavBar.css"
import  CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
        <header>
            <Link to="/">
            <img className='pokelogo' src={"./img/logo.png"} alt="Logo Pokebola" />
            </Link>


            <h1>PokeStore</h1>

            <nav>
                <ul>
                    <li>
                    <NavLink to="/"> Home </NavLink>
                   </li>

                    <li>
                    <NavLink to="/categoria/evolucion"> Evolucion </NavLink>
                    </li>

                    <li>
                    <NavLink to="/categoria/legendarios"> Legendarios </NavLink>
                    </li>

                 

                </ul>
            </nav>

            <CartWidget/>

        </header>
  )
}

export default NavBar


