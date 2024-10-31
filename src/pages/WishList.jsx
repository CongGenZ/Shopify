import Product from "../components/Product";

const WishList = () => {
  return (
    <div>
      {/* Main */}
      <div className="container mx-auto font-karla min-h-[83vh]">
        <div className="flex flex-col justify-center items-center p-8">
          <img src="/emptyCart.jpg" className="w-60" alt="empty" />
          <p className="text-center text-xl font-semibold my-2 dark:text-white">
            Your wishlist is empty
          </p>
        </div>
        <hr />
        <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
          <div className="sm:flex items-center justify-between">
            <h2 className="text-4xl font-medium font-lora dark:text-white">
              Your Wishlist
            </h2>
          </div>
          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4"
            data-test="product-list-container"
          >
            {/* Single Product */}
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
