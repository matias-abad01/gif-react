import React from 'react'
import { useState } from 'react';
import './buscador.css'

export const Buscador = ({addAgregar}) => {

    const [valor, setBuscar] = useState("");

    const eventValor = ({target})=>{
        setBuscar(target.value)  
    }

    const eventForm = (event)=>{
        event.preventDefault();
        if (valor.trim().length <= 1) return;/*no agregar si esta vacio*/ 
       /* addAgregar((x)=>[buscar,...x]);*/
        addAgregar(valor.trim().charAt(0).toUpperCase() + valor.slice(1).toLowerCase())
        setBuscar("") /* luego de agregar, el value del input no tendra nada */

    }



  return (
    <form onSubmit={eventForm} className="formulario-buscar">
    <input 
    type="text" 
    placeholder='buscar gyf'
    value={valor}
    onChange={eventValor} 

    />
    </form>
  )
}
