import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Type {
    selectNumberOfPlayers: string;
}
const initialState: Type = {
    selectNumberOfPlayers: "1"
}

const NumberOfPlayersSlice = createSlice({
    name: "nopArgument",
    initialState,

    reducers: {
        setSelectNumberOfPlayers: (state, action: PayloadAction<string>) => {
            state.selectNumberOfPlayers = action.payload;
        },
    },
});

export const { setSelectNumberOfPlayers } = NumberOfPlayersSlice.actions;

export default NumberOfPlayersSlice.reducer;