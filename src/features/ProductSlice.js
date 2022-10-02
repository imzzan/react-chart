import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';


const productEntity = createEntityAdapter({
    selectId : (product) => product.id
})

const ProductSlice = createSlice({
    name : 'product',
    initialState : productEntity.getInitialState(),

});


export const productSelectors = productEntity.getSelectors(state => state.product);
export default ProductSlice.reducer;