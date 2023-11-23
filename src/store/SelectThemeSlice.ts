import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Type {
  selectTheme: string;
}
const initialState: Type = {
  selectTheme: "Numbers",
}

const SelectThemeSlice = createSlice({
  name: "themeArgument",
  initialState,

  reducers: {
    setSelectTheme: (state, action: PayloadAction<string>) => {
      state.selectTheme = action.payload;
    },
  },
});

export const { setSelectTheme } = SelectThemeSlice.actions;
export default SelectThemeSlice.reducer;
