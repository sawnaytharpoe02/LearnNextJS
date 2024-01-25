import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth-slice';
import {useSelector, TypedUseSelectorHook} from 'react-redux'
import { productsApi } from './features/product-api-slice';

export const store = configureStore({
  reducer: {
    authReducer,
    [productsApi.reducerPath]: productsApi.reducer,   
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware)
}); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
