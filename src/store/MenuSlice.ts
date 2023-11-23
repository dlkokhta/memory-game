import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Type {
    menu: boolean;//this name "menu" is like useState state
    // menu1: boolean;
}
const initialState: Type = {
    menu: true,
    // menu1: false,
}
const MenuSlice = createSlice({
    name: "menu1", //this name "menu1 is to pass store.ts"
    initialState,

    reducers: {
        setMenu: (state, action: PayloadAction<boolean>) => {
            state.menu = action.payload;
        },
    },
});

export const { setMenu } = MenuSlice.actions;
export default MenuSlice.reducer;











