import React, { useEffect } from 'react'
import DynamicRows from "./DynamicRows";
import './Style.css';
import requests from "./request";

function Index()
{
   
    console.log(requests)
    return(
        <>       
            <DynamicRows link={requests.fetchNetflixOriginals} heading="Netflix Orignal"/>
            <DynamicRows link={requests.fetchActionMovies} heading="Horror"/>
        </>
    )
}
export default Index