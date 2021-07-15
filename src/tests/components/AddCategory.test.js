import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    
    })
    
    test('debe de cambiar la caja de texto ', () => {
        
        let input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        // Simulate a change in the input and the event, which changes the state
        input.simulate('change', { target: { value } });
        
        input = wrapper.find('input');
        expect( input.prop('value') ).toBe( value );

    })

    test('NO debe de añadir una categoria al llamar a onSubmit', () => {
        
        // Provides a method inside a object to mock behaviour of handleSubmit
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();

    })
    
    test('debe de llamar a setCategories y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'The Wolf of Wall Street';
        
        // 1. Simulate inputChange
        input.simulate('change', { target: { value } });
        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} } );
        // 3. setCategories must be called with a function
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        // 4. input value must be ''
        expect( input.prop('value') ).toBe('');

    })
    
})
