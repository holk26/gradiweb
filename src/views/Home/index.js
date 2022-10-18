import { useState } from "react";
import { useNavigate } from "react-router";
import { useFetchShopifyQuery } from "../../redux/api/shopify";
import Loading from "../../components/Loading"
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
import Results from "../Results";

const Home = () => {
    const [total, setTotal] = useState(0);
    const [cont, setCont] = useState(1);

    const { data: shopifyX, isLoading, isSuccess, isFetching, error } = useFetchShopifyQuery();

  
    

    const RenderConten = () => {
        if (error) {
            return <p>{error.error}</p>
        } else if (isLoading || isFetching) {
            return <div className="mx-auto" style={{width: "200px"}}> Centered element</div>
        }else if (isSuccess && shopifyX?.available) {
            console.log(shopifyX.variants[6]);
            return <Results shopify={shopifyX}/>
        }
    };

    
    return(
        <>
        {RenderConten()}

        </>               
    );
}

export default Home;