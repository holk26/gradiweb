import { useState } from "react";
import styles from "../../style.css"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Details from "./components/Details";
import Figure from 'react-bootstrap/Figure';
import Carousel from 'react-bootstrap/Carousel';

const Results = ({ shopify }) => {
    const valor = shopify?.price.toString().slice(0,-2);
    const [total, setTotal] = useState(valor);
    const [cont, setCont] = useState(1);

    const handlerMasItems = () => {
        setCont(cont+1);
        setTotal((1+cont)*valor);
    }

    const handlerMenosItems = () => {
        if(cont > 1){
            setCont(cont-1);
            setTotal(total-valor);
        }
        
    }

    const currency = function(number){
        return new Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
    };

    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return(
        <>
        <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>


        <Navbar>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Desarrollado por: <a href="https://github.com/holk26">Homero Cabrera A</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{shopify?.title}</Breadcrumb.Item>
            </Breadcrumb>

            <Row className="margin mb-4">
            <Col md className="justify-content-md-center">             
            <Carousel variant="dark" fade onSelect={handleSelect}>
                            {shopify?.images.map((value, index) => (
                                
                                    <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={value}
                                    alt="First slide"
                                  />
                                  </Carousel.Item>
                                  
                                
                            ))}
                               </Carousel>   
                    </Col>
                    <Col>
                    
                            <h6>{shopify?.vendor}</h6>
                            <h1>{shopify?.title}</h1>
                            <Stack direction="horizontal" gap={3}>
                               <h2>{currency(valor)}</h2>
                               <h5 style={{color: '#818181'}}><del>{currency(shopify?.compare_at_price.toString().slice(0,-2))}</del></h5>
                            </Stack>
                            <hr />  
                            {console.log(shopify)}
                            <Details infDetails= {shopify?.options}/>
                            
                            <hr />

                            <Row className="mt-4">
                                <Col>
                                <ButtonGroup className="mb-2 border">
                                    <Button variant="flat" onClick={handlerMenosItems}>-</Button>
                                    <Button variant="flat">{cont}</Button>
                                    <Button variant="flat" onClick={handlerMasItems}>+</Button>
                                </ButtonGroup>
                                                        
                                </Col>
                                <Col className="align-items-end:" style={{direction: "rtl"}}>
                                <h5 className="align-items-end">Total price: <strong>$ {total}</strong></h5>
                       

                                </Col>
                            </Row>

                            <Row className="margin mt-2">
                                <Col lg className="mt-2">
                                <Button variant="flat" size="lg">
                                Add to favourite
                            </Button>
                                </Col>
                                <Col className="mt-2">
                                <Button variant="cart" size="lg">
                                Add to cart
                            </Button>

                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col>
                                   <div dangerouslySetInnerHTML={{__html: shopify?.description}}></div>
                                </Col>
                            </Row>
                            
                           



                            
                            


                    
                    </Col>
        </Row>
      </Container>

                
      </ThemeProvider>
        </>   



                
    );
}

export default Results;