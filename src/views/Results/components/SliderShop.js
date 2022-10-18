import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

const SliderShop = ({data}) =>{

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    return(
        <Carousel variant="dark" fade onSelect={handleSelect}>

                            {data.map((value, index) => (
                                
                                    <Carousel.Item key={index}>
                                    <img
                                    className="d-block w-100"
                                    src={value}
                                    alt="First slide"
                                  />
                                  </Carousel.Item> 
                            ))}
         </Carousel>  
        
    );
}
export default SliderShop;