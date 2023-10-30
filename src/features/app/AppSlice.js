import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lang: 'en',
    theme: 'theme1',
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateLang: (state, action) => {
            state.lang = action.payload;
        },
        updateTheme: (state, action) => {
            state.theme = action.payload;
            document.getElementById('jssDefault').setAttribute('href', `http://164.100.196.138/lms/assets/css/${state.theme}.css`)
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateLang, updateTheme } = AppSlice.actions

export default AppSlice.reducer