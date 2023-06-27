import { getGif } from "../helpers/getGifs"

const GifGrid = ({ category }) => {


    getGif(category)


    return (
        <>
            <h3>{ category }</h3>
            <p>hola mundo</p>
        </>
    )
}

export default GifGrid