import {useState, useEffect} from "react";
import ProductList from "../components/productlist";
import {URL} from "../constants"
const HomePage = ({searchQuery}) =>{
    const [products, setProducts] = useState([]);
      useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch(URL);
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
        <div className="home-page">
            <ProductList products={products}/>
        </div>
    )
}

export default HomePage;