import GifItem from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)
    
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