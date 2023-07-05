import {useState, useEffect} from "react";
import ProductList from "../components/productlist";
const HomePage = ({searchQuery}) =>{
    const [products, setProducts] = useState([]);
      useEffect(() => {
        const fetchProducts = async () => {
          try {
              const url = 'https://fakestoreapi.com/products';
            const response = await fetch(url);
            const data = await response.json();
            const filteredData = data.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
            if(filteredData.length === 0) {
              setProducts(data);
            }
            setProducts(filteredData);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
        fetchProducts();
      }, [searchQuery]);
    return(
        <div>
            <ProductList products={products}/>
        </div>
    )
}

export default HomePage;