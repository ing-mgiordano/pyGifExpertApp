import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components'

describe('Prueba en <AddCategory />', () => { 
    
    test('debe cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} } /> )
        const input = screen.getByRole( 'textbox' )

        fireEvent.input( input, { target: { value: 'Saitama' } } )
        expect( input.value ).toBe( 'Saitama' )

        screen.debug()

    })

    test('debe de llamar onNewCategory si input tiene un valor', () => { 
        
        const inputValue = 'Saitama'
        const onNewCategory = jest.fn() //Mock.. simulacion de funcion

        render( <AddCategory onNewCategory={ onNewCategory } /> )
        const input = screen.getByRole( 'textbox' )
        const form = screen.getByRole( 'form' )

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit( form )
        expect( input.value ).toBe( '' )

        expect( onNewCategory ).toHaveBeenCalledTimes( 1 ) //se llamo una vez la funcion
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ) //se llamo con el valor de inputValue

        screen.debug()

    })

    test('no debe de llamar onNewCategory si el input esta vacio', () => { 
 
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory } /> )
        const form = screen.getByRole( 'form' )

        fireEvent.submit( form )

        expect( onNewCategory ).toHaveBeenCalledTimes( 0 )
        expect( onNewCategory ).not.toHaveBeenCalled()

    })
    
})