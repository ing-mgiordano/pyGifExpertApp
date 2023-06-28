import { useEffect, useState } from "react"
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
            <ol>
                { images.map(({ id, title }) => (
                    <li
                        key={ id }
                    >
                        { title }
                    </li>
                ))}
            </ol>
        </>
    )
}

export default GifGrid