import { useEffect, useState } from 'react'
import { getGif } from '../components/api/getGif';

export const useFetchGifs = (nombre) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async()=>{
        const newImages = await getGif(nombre);
        setImages(newImages);
        setIsLoading(false)

    }

    useEffect(() => {
       getImages()
    }, [])


  return {
        images,
        isLoading}
  
}
