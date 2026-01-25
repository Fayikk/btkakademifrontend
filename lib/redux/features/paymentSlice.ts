import { BasketDTO, BasketResponseDTO, CategoryDTO, PaymentRequestDTO, ResponseModel } from "@/lib/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

interface PaymentState {
    isSuccess:boolean;
    isLoading:boolean;
    error:string | null;
}


const initialState : PaymentState = {
    isSuccess:false,
    isLoading:false,
    error:null
}


export const addPayment = createAsyncThunk(
    'payment/addPayment',
    async (requestBody:PaymentRequestDTO,{rejectWithValue}) => {
        try{

            const response = await api.post<boolean>('/Payment',requestBody);
            return response;

        }catch{
            return rejectWithValue("Add Basket Failed")
        }
    }
)







const paymentSlice = createSlice({
    name:'baskets',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(addPayment.pending,(state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(addPayment.fulfilled,(state,action) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(addPayment.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        })
    }
})


export default paymentSlice.reducer;