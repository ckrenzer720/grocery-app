import { configureStore } from '@reduxjs/toolkit';
import listReducer from './slices/listSlice';
import categoryReducer from './slices/categorySlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    categories: categoryReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});
