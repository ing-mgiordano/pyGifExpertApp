import React from "react"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
import propTypes from "prop-types"

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && 
                    <h2>Cargando...</h2>
            }
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

GifGrid.propTypes = {
    category: propTypes.string.isRequired
}