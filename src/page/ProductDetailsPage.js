import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import getProduct from "../api/getProduct";

const ProductDetailsPage = () =>{
const params = useParams();
const {data, isLoading} = useQuery(`PdoductDetails${params.productID}`, ()=> getProduct('https://fakestoreapi.com/products/'+params.productID));
//   {!isLoading &&  console.log(data);}
    return (
        <>
        {!isLoading &&
        <div className="container">
            <div className="row">
                <div className="col-md-6">                    
                    <img className="w-100" src={data.image} alt="" />
                </div>
                <div className="col-md-6">                    
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
        }
        </>
    )
}
export default ProductDetailsPage;