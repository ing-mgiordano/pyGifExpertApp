import React from 'react'
import { useState } from 'react'
import propTypes from "prop-types"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

  return (
    <form onSubmit={ handleSubmit } aria-label='form'>
        <input
            type="text"
            placeholder="Buscar gif"
            value={ inputValue }
            onChange={ onInputChange }  // esto { (e) => onInputChange(e) } se puede resumir a { onInputChange }
        />
    </form>
  )
}


AddCategory.propTypes = {
    onNewCategory: propTypes.func.isRequired,
}
