import { BasketDTO, BasketResponseDTO, CategoryDTO, ResponseModel } from "@/lib/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

interface BasketState {
    baskets:ResponseModel<BasketResponseDTO> | null;
    isLoading:boolean;
    error:string | null;
}


const initialState : BasketState = {
    baskets:null,
    isLoading:false,
    error:null
}


export const fetchBaskets = createAsyncThunk(
    'baskets/fetchBaskets',
    async (_,{rejectWithValue}) => {

        try {
            const response = await api.get<ResponseModel<BasketResponseDTO>>('/Basket');
            return response.data;
        }
        catch (error) {
            return rejectWithValue('Failed to fetch baskets');
        }

       
    }
)



export const addBasket = createAsyncThunk(
    'basket/addBasket',
    async (requestBody:BasketDTO,{rejectWithValue}) => {
        try{

            const response = await api.post<boolean>('/Basket',requestBody);
            return response;

        }catch{
            return rejectWithValue("Add Basket Failed")
        }
    }
)





const basketSlice = createSlice({
    name:'baskets',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchBaskets.pending,(state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchBaskets.fulfilled,(state,action) => {
            state.isLoading = false;
            state.baskets = action.payload;
        })
        .addCase(fetchBaskets.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        }).addCase(addBasket.pending,(state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(addBasket.fulfilled,(state,action) => {
            state.isLoading = false;
        })
        .addCase(addBasket.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        })
    }
})


export default basketSlice.reducer;