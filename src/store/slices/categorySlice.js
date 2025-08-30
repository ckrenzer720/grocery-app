import { createSlice } from '@reduxjs/toolkit';

const defaultCategories = [
  { id: 'produce', name: 'Produce', color: '#4CAF50', icon: '🍎' },
  { id: 'dairy', name: 'Dairy', color: '#2196F3', icon: '🥛' },
  { id: 'meat', name: 'Meat & Fish', color: '#F44336', icon: '🥩' },
  { id: 'pantry', name: 'Pantry', color: '#FF9800', icon: '🥫' },
  { id: 'frozen', name: 'Frozen', color: '#9C27B0', icon: '🧊' },
  { id: 'beverages', name: 'Beverages', color: '#795548', icon: '🥤' },
  { id: 'household', name: 'Household', color: '#607D8B', icon: '🧽' },
  { id: 'other', name: 'Other', color: '#9E9E9E', icon: '📦' },
];

const initialState = {
  categories: defaultCategories,
  selectedCategory: null,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action) => {
      const { id, updates } = action.payload;
      const categoryIndex = state.categories.findIndex(cat => cat.id === id);
      if (categoryIndex !== -1) {
        state.categories[categoryIndex] = { ...state.categories[categoryIndex], ...updates };
      }
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(cat => cat.id !== action.payload);
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    reorderCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { 
  addCategory, 
  updateCategory, 
  removeCategory, 
  setSelectedCategory, 
  reorderCategories 
} = categorySlice.actions;

export default categorySlice.reducer;
