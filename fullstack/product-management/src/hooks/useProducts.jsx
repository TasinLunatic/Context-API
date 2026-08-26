import { useCallback, useEffect, useState, useMemo } from "react";
import { productService } from "../api/services";

export default function useProducts() {
    
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [products, setProducts] = useState([]);
      const [search, setSearch] = useState("");

      const getProducts = useCallback(async () => {
          setLoading(true);
          setError(null);
          try {
            const products = await productService.getProducts();
            setProducts(products);
          } catch (err) {
            console.error(err);
            setError("Error fetching data");
          } finally {
            setLoading(false);
          }
        }, []);
      
        useEffect(() => {
          getProducts();
        }, [getProducts]);


        const getProductByName = useCallback(
           (name) => {
             const product = products.find((product) =>
               new RegExp(name, "i").test(product.name),
             );
             return product ? product.name : "product not found";
           },
           [products],
         );

        const totalPrice = useMemo(() => {
          return products.reduce((acc, product) => acc + product.price, 0);
        }, [products]);

        const handleProductSearch = useCallback((e) => {
         setSearch(e.target.value);
        }, []);
      
        const getItemCount = (product) => {
         return product.items ?? product.quantity ?? product.stock ?? 0;
     };

    return{products, loading, error, search, getItemCount,getProductByName, totalPrice, handleProductSearch}; 
}
