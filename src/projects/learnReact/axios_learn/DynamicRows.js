import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';



function DynamicRows(props)
{   
    // Code to get data from api 
    const [storeVal, storeFunction] = useState([]);
    useEffect(() =>
    {
        async function fetchData(){
            const result = await axios.get(props.link)
            storeFunction(result.data.results)
        }
        fetchData()
    }, [])
    // ___________________________
    return(
        <>
            <div className='pt-3'>
                <h4 className='text-white'>{props.heading}</h4>
            </div>
            <div className='containerSelf'>
                {
                    storeVal.map((elem, index) => 
                    {
                        console.log(elem);
                        return(
                            <>
                                <div className='imageBox border p-2'>
                                    <div className='imgParent'>
                                        <img src={"https://image.tmdb.org/t/p/original"+elem.poster_path} />
                                    </div>
                                    <h4 className='text-secondary'>{elem.original_name}</h4>  
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default DynamicRows