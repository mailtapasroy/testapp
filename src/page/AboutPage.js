import { useQuery } from "react-query";
import getProduct from "../api/getProduct";
import parse from 'html-react-parser';
const AboutPage = () =>{
    
  const {data, isLoading} = useQuery("AboutCon", ()=> getProduct('http://democenter.net/np/flightforsight/wp-json/wp/v2/pages/9'));
//   {!isLoading &&  console.log(data);}
    return (
        <>
        <div className="container">
            <h1 className="text-center mb-5">About us</h1>
            {isLoading ? <p className="text-center">Lodding...</p> :
            <div className="p-4">
                {parse(data.content.rendered)}
            </div>
}
        </div>
        </>
    )
}
export default AboutPage;