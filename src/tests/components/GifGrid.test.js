import React from 'react'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs'

// Mock any call to this file and controls the information that it will respond
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Piece'

    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true        
        });

        const wrapper = shallow( <GifGrid category={ category }/> );
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'IMAO',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false        
        });

        const wrapper = shallow( <GifGrid category={ category }/> );

        expect( wrapper.find('p').exists() ).toBeFalsy();        
        expect( wrapper.find('GifGridItem').exists() ).toBeTruthy();        
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );        
    })
    
})
