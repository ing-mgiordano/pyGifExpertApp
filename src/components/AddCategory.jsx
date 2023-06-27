import { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {

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
    <form onSubmit={ handleSubmit }>
        <input
            type="text"
            placeholder="Buscar gif"
            value={ inputValue }
            onChange={ onInputChange }  // esto { (e) => onInputChange(e) } se puede resumir a { onInputChange }
        />
    </form>
  )
}

export default AddCategory