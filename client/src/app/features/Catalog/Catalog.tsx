





import ProductList from "./ProductList";
import { Product } from "../../models/products";
import { useState, useEffect } from "react";





export default function Catalog(){
    const [products,setproducts] = useState<Product[]>([]);
     useEffect  (() => {

      fetch('http://localhost:5000/API/products')
      .then (response => response.json ())
      .then (data => setproducts(data));



    },[])

    



    return( 

        <>
        <ProductList products={products}/>


       </>


    )
}