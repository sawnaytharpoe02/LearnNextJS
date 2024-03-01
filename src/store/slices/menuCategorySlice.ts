import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CatProps {
  id: string;
  name: string;
  isAvaliable: boolean;
}

interface MenuCategory {
  isLoading: boolean;
  isError: boolean;
  menuCategory: CatProps[];
}

const initialState: MenuCategory = {
  isLoading: false,
  isError: false,
  menuCategory: [],
};

const menuCategorySlice = createSlice({
  name: "menuCategory",
  initialState,
  reducers: {
    setMenuCategory: (state, action: PayloadAction<CatProps>) => {
      state.menuCategory = [...state.menuCategory, action.payload];
    },
    removeMenuCategory: (state, action: PayloadAction<CatProps>) => {
      state.menuCategory = state.menuCategory.filter(
        (v) => v.id !== action.payload.id
      );
    },
    updateMenuCategory: (state, action: PayloadAction<CatProps>) => {
      const existingIndex = state.menuCategory.findIndex(
        (v) => v.id === action.payload.id
      );
      state.menuCategory[existingIndex] = action.payload;
    },
  },
});

export const { setMenuCategory, removeMenuCategory, updateMenuCategory } =
  menuCategorySlice.actions;
export default menuCategorySlice.reducer;
