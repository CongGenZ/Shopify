import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllCategory = () => {
  const [categories, setCategories] = useState([]);
  const isLightMode = useSelector((state) => state.themeSlice.isLightMode);
  const fetchCategory = useCallback(async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category-list"
    );
    const jsonResponse = await response.json();
    setCategories(jsonResponse);
  }, []);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);
  return (
    <div style={{
      backgroundColor: isLightMode ? "#fff" : "#333",
      color: isLightMode ? "#000" : "#fff",
    }}>
      {/* Main */}
      <div className="container mx-auto min-h-[83vh] p-4 font-karla"
          
      >
        <span className="text-lg dark:text-white">Categories</span>
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 my-2"
          
        >
          {categories.map((c) => (
            <div  style={{
              backgroundColor: isLightMode ? "#fff" : "#696969",
              color: isLightMode ? "#000" : "#fff",
            }}
              key={c}
              className="bg-gray-100 dark:bg-slate-600 dark:text-white px-4 py-4 font-karla mr-2 mb-2"
            >
              <div className="text-lg capitalize">{c}</div>
              <Link
                to={`/category/${c}`}
                className="hover:underline text-blue-500"
              >
                View products
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategory;
