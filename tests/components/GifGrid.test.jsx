import React from 'react'
import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

//tengo que crear un mock completo del customHook useFetchGifs
jest.mock('../../src/hooks/useFetchGifs')

describe('Prueba en <GifGrid />', () => {
    
    const category = 'One Punch'
    
    test('debe mostrar el "loading" incialmente', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [], 
            isLoading: true
        })

        render( <GifGrid category={ category }/> )
        expect( screen.getByText( category ) )
        expect( screen.getByText( 'Cargando...' ) )
        screen.debug()

    })

    test('debe mostrar items cuando se cargan las imagenes (useFetchGifs)', () => { 

        const gifs = [
            {
                id:'12A',
                title: 'Saitama',
                url: 'htps://localhost/saitama.jpg'
            },
            {
                id:'12B',
                title: 'Goku',
                url: 'htps://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: false
        })

        render( <GifGrid category={ category }/> )
        expect( screen.getAllByRole('img').length ).not.toBe(0)
        screen.debug()
    })

})