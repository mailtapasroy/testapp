const getProduct = async(fetcher) =>{
    const response = await fetch(fetcher);    
    const data = await response.json();
    return data;
};
export default getProduct;