/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Language = 'ru' | 'en';

const LANG_NAME = 'lang';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: localStorage.getItem(LANG_NAME) || 'en',
  },
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      console.log(action);

      const { payload } = action || {};
      localStorage.setItem(LANG_NAME, payload);
      state.value = payload;
    },
  },
});

export default languageSlice.reducer;

export const {
  setLanguage,
} = languageSlice.actions;
