import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ThemeState = {
  mode: "light" | "dark";
};

export type ThemeMode = ThemeState["mode"];

const initialState: ThemeState = {
  mode: "light",
};

const applyTheme = (mode: ThemeMode) => {
  if (typeof document === "undefined") return;

  document.documentElement.setAttribute("data-theme", mode);
  document.documentElement.classList.toggle("dark", mode === "dark");
  document.documentElement.style.colorScheme = mode;
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
      applyTheme(state.mode);
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
      applyTheme(action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
