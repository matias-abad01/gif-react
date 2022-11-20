import { GyfGridItem } from './gyfGridItem';
import './gyfGrid.css'
import { useFetchGifs } from '../hook/useFetchGifs';




export const GifGrid = ({nombre}) => {   

  /*crear hook*/
    const {images, isLoading} = useFetchGifs(nombre);
    console.log(isLoading);
   /* 
    
    
*/
  return (
    <>
    <p className='titulo-buscado'>gifs relacionadas con: "{nombre}"</p>
    {isLoading && ( <h2>cargando....</h2> )}
    {images.map(({id, title, url})=>(
       <GyfGridItem key={id} title={title} url={url}/>

    ))}
    </>
  )
}
