import { useQuery } from "react-query";
import getProduct from "../api/getProduct";
import PdoductCard from '../components/PdoductCard';
const ProductPage = () =>{
    
  const {data, isLoading} = useQuery("Pdoduct", ()=> getProduct('https://fakestoreapi.com/products'));
//   {!isLoading &&  console.log(data);}
    return (
        <>
        <div className="container">
            <h1 className="text-center mb-5">Products</h1>
            {isLoading ? <p className="text-center">Lodding...</p> :
            <div className="row g-4">
                {data.map((product)=>
                <div key={product.id} className="col-lg-3 col-md-4 col-6">
                    <PdoductCard id={product.id} title={product.title} price={product.price} image={product.image}/>
                </div>
                )}
            </div>
}
        </div>
        </>
    )
}
export default ProductPage;