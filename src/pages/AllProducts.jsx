import { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setSortBy } from "../store/slices/productSlice";
const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.items);
  // const [products, setProducts] = useState([]);
  const isLightMode = useSelector((state) => state.themeSlice.isLightMode);
  // const fetchProduct = useCallback(async () => {
  //   const response = await fetch(`https://dummyjson.com/products`);
  //   const jsonResponse = await response.json();
  //   setProducts(jsonResponse.products);
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Handle change sort
  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };
  return (
    <div>
      {/* Main */}
      <div
        className="dark:bg-slate-800 pb-5"
        style={{
          backgroundColor: isLightMode ? "#fff" : "#333",
          color: isLightMode ? "#000" : "#fff",
        }}
      >
        <div className="container mx-auto min-h-[83vh] p-4 font-karla">
          <div className="grid grid-cols-4 gap-1">
            <div className="col-span-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg dark:text-white">Products</span>
                <select
                  onChange={handleSortChange}
                  className="border border-black dark:border-white rounded p-1 dark:text-white dark:bg-slate-600"
                  style={{
                    backgroundColor: isLightMode ? "#fff" : "#333",
                    color: isLightMode ? "#000" : "#fff",
                  }}
                >
                  <option value="default">Default</option>
                  <option value="asc">Price (low to high)</option>
                  <option value="desc">Price (high to low)</option>
                </select>
              </div>
              <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {/* Single product */}
                {products.map((p) => (
                  <Product key={p.id} productInfo={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
