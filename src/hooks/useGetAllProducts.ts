import { useEffect, useState } from "react"
import { getAllProducts } from "../services/Products/ProductService"

const useGetAllProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        (
           async function() {
               const products = await getAllProducts();
               setProducts(products);
           }
        )()
     },[])
  
    return { products };
}

export default useGetAllProducts