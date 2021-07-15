import { getGifs } from '../../helpers/getGifs'


describe('Pruebas con getGifts Fetch', () => {
    
    test('debe de traer 10 elementos ', async() => {
        
        const gifs = await getGifs('One Piece');

        expect( gifs.length ).toBe( 10 );

    })

    test('debe de devolver un array vacío ', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    })
    
})
