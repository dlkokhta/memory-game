import { configureStore } from "@reduxjs/toolkit";
import SelectThemeSlice from "./SelectThemeSlice";
import MenuSlice from "./MenuSlice";


const store = configureStore({
  reducer: {
    themeArgument: SelectThemeSlice,
    menu2: MenuSlice,//this comes from menu1
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
