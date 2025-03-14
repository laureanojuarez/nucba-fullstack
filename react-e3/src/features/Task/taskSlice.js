import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    clear: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, clear, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
