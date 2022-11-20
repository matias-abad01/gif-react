import './App.css'
import { useState } from 'react'
import { Buscador } from './components/buscador'
import { GifGrid } from './components/gyfGrid'

function GyfApp() {

  const [categori, setCategori] = useState(["goku"])

  const agregar = (agregado)=>{

    if (categori.includes(agregado)) return; /*no hacer nada si es repetido*/ 
    setCategori([agregado/*, ...categori*/]);
   

  }

  return (
    <>
      <Buscador addAgregar={agregar}/>
      
      <div className='list-img'>
        {categori.map( x=>(
          <GifGrid key={x} nombre={x}/>
        ))}
      </div>
    </>
  )
}

export default GyfApp
