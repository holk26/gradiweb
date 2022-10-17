import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { useEffect } from "react";


const Details = ({infDetails})  => {

    console.log(infDetails);
    const hello = (v1) =>{
        console.log(v1);
    
    }
    const hello2 = (v2) =>{
        console.log(v2);
    
    }
    

    infDetails.map((value) =>(
        hello(value.name==='Color'?value:""),
        hello2(value.name==='Size'?value:"")
    ));
    


    return(
        <>
                  {infDetails.map((type) => (   
                       
                       <Stack direction="horizontal" gap={1} key={type.position}>
                          <label className="radio">{type.name}</label>   
           
                          {type.values.map((value,index) =>(
                               <div key={index} >
                                  {type.name.value}
                   
                                 <input className={`input-${type.name}`} style={{backgroundColor: value}} name={type.name} type="radio" aria-label="radio 1" />
                                 <span className="check">{value}</span>
                                 
                                 </div>
                                  
                              ))}
                              
                              
                              
                          </Stack>
                          
                      ))}
       
           </>
    )
};

export default Details;