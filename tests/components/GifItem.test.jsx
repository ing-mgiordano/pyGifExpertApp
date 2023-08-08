import React from 'react';
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Prueba en <GifItem />', () =>{

    const title = 'Saitana'
    const url = 'https://one-punch.com/saitana.jpg'

    test('debe de hacer match con el snapshot ', () => {

        const { container } = render( <GifItem title={ title } url={ url } />)
        expect( container ).toMatchSnapshot()

    });

    test('debe mostrar la imagen con el URL y ALT inicado', () => {

        render( <GifItem title={ title } url={ url } />)
        //screen.debug() es para mostrar como es el componente

        //expect( screen.getByRole('img').src ).toBe( url )
        //expect( screen.getByRole('img').alt ).toBe( title )
        // si desestructuro screen.getByRole hago un codigo mas limpio
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url ) //deben ser iguales
        expect( alt ).toBe( title )

    });

    test('debe de mostrar el titulo del componente', () => {

        render( <GifItem title={ title } url={ url } />)
        expect(screen.getByText( title )).toBeTruthy() //debe existir el titulo
        
    });
})