import {useCallback, useEffect, useState,useMemo} from 'react'
import axios from 'axios'
import { productService } from '../api/services'

export default function ProductManagement() {
   const [search, setSearch] = useState("");
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

    const getProductByName = (name) => {
      return products.find((product) => product.name === name);
    };

    const totalPrice = useMemo(() => {
      return products.reduce((acc, product) => acc + product.price, 0);
    }, [products]);

    const handleSearch =(e) => {
               setSearch(e.target.value);
      };
      
    

  return(
   <div className="p-4">
      <h1 className="text-2xl font-bold">Product Management</h1>
      <div className='mb-4'>
         <input type="text" placeholder="Search by name" onChange={
            handleSearch
         }/>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-4'>
         {products.map((product) => (
            <div key={product.name}>{product.name}</div>
         ))}
      </div>
      <div className='text-2xl font-bold'>Total-Price: {totalPrice}</div>
   </div>
  );
  
}

