import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";


// Async action để fetch sản phẩm
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();
    return data.products;
  });
const productSlice = createSlice({
    name:'products',
    initialState:{
        items:[],// khởi tạo item sx là rỗng
        sortBy:'default',// giá trị  sắp xếp mặc định
    },
    reducers:{
        setSortBy:(state,action)=>{
            console.log(action);
            
         state.sortBy = action.payload;//action.payload: chứa dữ liệu truyền vào hành động setSortby
         state.items = sortProducts(state.items,state.sortBy)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
          state.items = action.payload;
        });
      },
});
// Hàm để sắp xếp sản phẩm
const sortProducts = (products, sortBy) => {
    if (sortBy === 'asc') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  };

  export const {setSortBy} = productSlice.actions;
  export default productSlice.reducer