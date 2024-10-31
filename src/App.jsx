import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import AllCategory from "./pages/AllCategory";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import WishList from "./pages/WishList";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "categories",
        element: <AllCategory />,
      },
      {
        path: "category/:categoryType",
        element: <CategoryProducts />,
      },
      {
        path: "account",
        element: <Profile />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
    ],
  },
]);
function App() {
  //const isLightMode = useSelector((state)=>state.themeSlice.isLightMode);
  return (
    <div >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
