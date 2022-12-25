import { configureStore, ThunkAction, AnyAction } from "@reduxjs/toolkit";
import AppManager from "./reducers/appSlice";
import { RootState } from "./types";


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>

const Store = configureStore({
    reducer: {
        AppManager
    }
})


export default Store;