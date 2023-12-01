import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Type {
    menu: boolean;

}
const initialState: Type = {
    menu: true,

}
const MenuSlice = createSlice({
    name: "menu1",
    initialState,

    reducers: {
        setMenu: (state, action: PayloadAction<boolean>) => {
            state.menu = action.payload;
        },
    },
});

export const { setMenu } = MenuSlice.actions;
export default MenuSlice.reducer;











