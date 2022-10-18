import { useState, useEffect } from "react";
import Stack from 'react-bootstrap/Stack';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../../style.css"
import { Col, Row } from "react-bootstrap";

const Details = ({infDetails})  => {



    const handlerColor = (changeEvent) => {  
          console.log(changeEvent.target.value);
    }

    const handlerSize = (changeEvent) => {  
        console.log(changeEvent.target.value);
  }

    const renderIco = (data) => {
        return(
        data.map((value2,index) => (             
                
                
                <div key={index}>
                <Stack direction="horizontal" gap={0} id="stock-size-x" className="stock-size">

                <label>{value2.name}</label>

                {value2.values.map((value,index2) => (
                     
                     <div key={index2}>
                     <label>
                    {value2.name === 'Color' &&
                      <div>
                            <input onChange={handlerColor} type="radio" name={value2.name} value={value} />
                            <span className="stock-colorX">{value}</span>
                     </div>
                     }

                    {value2.name === 'Size' && 
                    <div>
                        <input onChange={handlerSize} type="radio" name={value2.name} className="stock-size-x" value={value} />
                        <span>{value}</span>
                    </div>
                     }
                       
                    </label>
                     </div>
               
                ))} 
                </Stack>
                </div>
                 

        )))
    }

    return(
        <>
        {renderIco(infDetails)}       
           </>
    )
};

export default Details;



