import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Type {
  selectGridSize: boolean;
}

const initialState: Type = {
  selectGridSize: true,
}

const GridSizeSlice = createSlice({
  name: "gridsize",
  initialState,
 
  reducers: {
    setGridSize: (state, action: PayloadAction<boolean>) => {
      state.selectGridSize = action.payload
    },
  },
});

export const { setGridSize } = GridSizeSlice.actions
export default GridSizeSlice.reducer;

