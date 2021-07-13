import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        /* getGifs will only called 1 time thanks to useEffect */
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })     
    }, [category]);

    return state;
}
