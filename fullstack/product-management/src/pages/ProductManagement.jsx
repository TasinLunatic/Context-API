import {useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import { productService } from '../api/services'

export default function ProductManagement() {
   const [products, setProducts] = useState([]);

   const getProducts =useCallback (async () => {
      try {
         const products = await productService.getProducts();
         setProducts(products);
      } catch (err) {
         console.log(err);
         alert('Error fetching data');
      }
    },[]);

    useEffect(() => {
      getProducts();
    }, [getProducts]);

  return(
   <div className="p-4">
      <h1 className="text-2xl font-bold">Product Management</h1>
      <div className='grid grid-cols-3 gap-4 mt-4'>
         {products.map((product) => (
            <div key={product.name}>{product.name}</div>
         ))}
      </div>
   </div>
  );
  
}

