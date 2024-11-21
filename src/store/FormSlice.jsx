import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",

  initialState: {
    isEditing: false,
    firstName: "",
    lastName: "",
  },

  reducers: {
    editForm: (state, action) => {
      state.isEditing = true;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },

    cancelEdit: (state) => {
      state.isEditing = false;
    },

    saveName: (state, action) => {
      state.isEditing = false;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { editForm, cancelEdit, saveName } = formSlice.actions;
export default formSlice.reducer;
