import {useCallback, useEffect} from 'react'
import axios from 'axios'
import { productService } from '../api/services'

export default function ProductManagement() {
   const getProducts =useCallback (async () => {
      try {
         const products = await productService.getProducts();
      } catch (err) {
         console.log(err);
         alert('Error fetching data');
      }
    },[]);

    useEffect(() => {
      getProducts();
    }, [getProducts]);

  return<div>ProductManagement</div>
  
}

