import { useCallback, useEffect, useState } from "react";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryProducts = () => {
  const { categoryType } = useParams();
  const isLightMode = useSelector((state) => state.themeSlice.isLightMode);
  const [products, setProducts] = useState([]);

  const fetchProduct = useCallback(async () => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${categoryType}`
    );
    const jsonResponse = await response.json();
    setProducts(jsonResponse.products);
  }, [categoryType]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div style={{
      backgroundColor: isLightMode ? "#fff" : "#333",
      color: isLightMode ? "#000" : "#fff",
    }}>
      {/* Main */}
      <div className="container mx-auto min-h-[83vh] p-4 font-karla"
          
      >
        <div className="flex items-center space-x-2 text-lg dark:text-white">
          <span>Categories</span>
          <span> {">"} </span>
          <span className="font-bold">Beauty</span>
        </div>
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-2">
          {/* Single Product */}
          {products.map((p) => (
            <Product key={p.id} productInfo={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
