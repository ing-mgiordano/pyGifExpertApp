import React from 'react';
import propTypes from "prop-types"

export const GifItem = ( {title, url} ) => {
  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
}



// agregar prop-types => yarn add prop-types