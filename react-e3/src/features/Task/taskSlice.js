import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("tasks")) || [],
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

export const { add, clear, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
