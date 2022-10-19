import { useFetchShopifyQuery } from "../../redux/api/shopify";

import Results from "../Results";

const Home = () => {

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