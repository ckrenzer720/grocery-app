import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  notifications: true,
  autoSort: true,
  showCompleted: true,
  defaultQuantity: 1,
  language: 'en',
  currency: 'USD',
  units: 'imperial', // imperial or metric
  accessibility: {
    largeText: false,
    highContrast: false,
    reduceMotion: false,
  },
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleNotifications: (state) => {
      state.notifications = !state.notifications;
    },
    toggleAutoSort: (state) => {
      state.autoSort = !state.autoSort;
    },
    toggleShowCompleted: (state) => {
      state.showCompleted = !state.showCompleted;
    },
    updateDefaultQuantity: (state, action) => {
      state.defaultQuantity = action.payload;
    },
    updateLanguage: (state, action) => {
      state.language = action.payload;
    },
    updateCurrency: (state, action) => {
      state.currency = action.payload;
    },
    updateUnits: (state, action) => {
      state.units = action.payload;
    },
    updateAccessibility: (state, action) => {
      state.accessibility = { ...state.accessibility, ...action.payload };
    },
    resetSettings: (state) => {
      return { ...initialState };
    },
  },
});

export const {
  updateTheme,
  toggleNotifications,
  toggleAutoSort,
  toggleShowCompleted,
  updateDefaultQuantity,
  updateLanguage,
  updateCurrency,
  updateUnits,
  updateAccessibility,
  resetSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
