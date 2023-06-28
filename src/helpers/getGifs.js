export const getGif = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JfQVWSI3rdcErGspaV6nAgn9KVjEoY6p&q=${ category }&limit=10`
    const resp = await fetch( url )
    const { data } = await resp.json()

    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))

    console.log(gifs)
    return(gifs)
}