import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import menuCategoryReducer from "./slices/menuCategorySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    menuCategory: menuCategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
