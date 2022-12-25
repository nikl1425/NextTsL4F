import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'AppManager',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: {
        sideBarActive: true
    },
    reducers: {
        toggleSidebar: (state) => {
            state.sideBarActive = !state.sideBarActive
        }
    },
})

export const { toggleSidebar } = appSlice.actions;

export default appSlice.reducer;