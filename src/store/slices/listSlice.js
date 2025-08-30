import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const addItem = createAsyncThunk(
  "list/addItem",
  async (item, { rejectWithValue }) => {
    try {
      // In the future, this will sync with cloud storage
      const newItem = {
        id: Date.now().toString(),
        name: item.name,
        category: item.category,
        completed: false,
        addedAt: new Date().toISOString(),
        quantity: item.quantity || 1,
        notes: item.notes || "",
      };
      return newItem;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleItem = createAsyncThunk(
  "list/toggleItem",
  async (itemId, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const item = state.list.items.find((item) => item.id === itemId);
      if (!item) {
        throw new Error("Item not found");
      }
      return { id: itemId, completed: !item.completed };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const { id, updates } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.items[itemIndex] = { ...state.items[itemIndex], ...updates };
      }
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((item) => !item.completed);
    },
    reorderItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(toggleItem.fulfilled, (state, action) => {
        const { id, completed } = action.payload;
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.completed = completed;
        }
      });
  },
});

export const { removeItem, updateItem, clearCompleted, reorderItems } =
  listSlice.actions;
export default listSlice.reducer;
