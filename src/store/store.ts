import { configureStore } from "@reduxjs/toolkit";
import SelectThemeSlice from "./SelectThemeSlice";
import MenuSlice from "./MenuSlice";
import GridSizeSlice from "./GridSizeSlice";
import NumberOfPlayersSlice from "./NumberOfPlayersSlice";


const store = configureStore({
  reducer: {
    themeArgument: SelectThemeSlice,
    menu2: MenuSlice,
    gridSize: GridSizeSlice,
    numberOfPlayers: NumberOfPlayersSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
