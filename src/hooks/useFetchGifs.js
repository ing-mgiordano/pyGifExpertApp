import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs"


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImage = async() => {
        const newImage = await getGif( category )
        setImages(newImage)
        setIsLoading(false)
    }

    useEffect(() => {
        getImage()
    }, [])

    return {
        images, // Esto es lo mismo que images: images
        isLoading
    }

}