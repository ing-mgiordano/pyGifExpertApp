import { useEffect, useState } from "react"
import GifItem from "./GifItem"
import { getGif } from "../helpers/getGifs"

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    const getImage = async() => {
        const newImage = await getGif( category )
        setImages(newImage)
    }

    useEffect(() => {
        getImage()
    }, [])
    
    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                { 
                    images.map((image) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }  //tengo disponible como prop todas la informacion que venga dentro de image en el componente 
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid