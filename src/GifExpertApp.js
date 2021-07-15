import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ({ defaultCategories = [] }) => {
    
    // Hook
    const [categories, setCategories] = useState( defaultCategories );

    return (
        <>
           <h2>Gif App</h2> 

           <AddCategory setCategories={ setCategories }/>

           <hr />

            <ol>
                { 
                    categories.map( cat => 
                        <GifGrid 
                            category={ cat }
                            key={ cat }
                        /> 
                    ) 
                }
            </ol>
        </>
    )
}
