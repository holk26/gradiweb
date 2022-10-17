import { useState } from "react";
import { useNavigate } from "react-router";
import { useFetchShopifyQuery } from "../../redux/api/shopify";
import Loading from "../../components/Loading"
import styles from "../../style.module.css"

const Home = () => {

    const { data: shopify, isLoading, isSuccess, isFetching, error } = useFetchShopifyQuery();

console.log(shopify);

    const RenderConten = () => {
        if (error) {
            return <p>{error.error}</p>
        } else if (isLoading || isFetching) {
            return <div>espere</div>
        }else if (isSuccess && shopify?.available) {
            return <div>Cargo</div>
        }
    };

    
    return(
            <div>

                

                <div>
                        <div>
                            <div>Catalog</div>
                            <div>Sneckers</div>
                            <div>{shopify?.title}</div>
                        </div>

                        <img src={shopify?.featured_image} />

                </div>

                <div>
                    <h1>{shopify?.vendor}</h1>
                    <h1>{shopify?.handle}</h1>
                    <div></div>

             
                </div>

        </div>
                
    );
}

export default Home;