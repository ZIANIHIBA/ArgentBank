import { createSlice } from "@reduxjs/toolkit";
import { login } from "@/actions/login.action";

const initialState = {
  isLogged: !!localStorage.getItem("token"),
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};
const slice = createSlice({
  name: "token",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.isLogged = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLogged = false;
      state.loading = true;
      state.error = null;
      state.token = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogged = true;

      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      console.log(state);
    });
    builder.addCase(login.rejected, (state, action) => {
      console.error(action.error.message);
      state.loading = false;
      state.error = "Le mot de passe ou l'email est incorrect.";
    });
  },
});

export const { logout } = slice.actions;
export default slice.reducer;
