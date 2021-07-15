import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de devolver el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook ( () => useFetchGifs('One Punch') )
        const { data, loading } = result.current;
        
        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();

        await waitForNextUpdate();
    })

    test('debe de devolver data con un array de imagenes y loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook ( () => useFetchGifs('One Punch') )
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBeFalsy();
    })
    
})
