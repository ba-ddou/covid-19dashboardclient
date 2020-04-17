import React, { useState,useEffect,createContext } from 'react';
const URL = "https://nataliia-radina.github.io/react-vis-example/";

export const SeriesContext = createContext();

export const SeriesProvider = (props) => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch(URL)
        .then(res => res.json())
        .then(res =>{
            let data = res.results.filter(r => r.name === "JavaScript");
            setData(data);
        })
    },[])
    console.log("data :>",data);
    return ( 
        <SeriesContext.Provider value={{data}}>
            {props.children}
        </SeriesContext.Provider>
     );
}
 



 
