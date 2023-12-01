import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Type {
    selectNumberOfPlayers: number;
}
const initialState: Type = {
    selectNumberOfPlayers: 1
}

const NumberOfPlayersSlice = createSlice({
    name: "nopArgument",
    initialState,

    reducers: {
        setSelectNumberOfPlayers: (state, action: PayloadAction<number>) => {
            state.selectNumberOfPlayers = action.payload;
        },
    },
});

export const { setSelectNumberOfPlayers } = NumberOfPlayersSlice.actions;

export default NumberOfPlayersSlice.reducer;