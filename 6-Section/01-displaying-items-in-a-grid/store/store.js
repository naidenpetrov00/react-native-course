import { configureStore } from "@reduxjs/toolkit";
import { addFavorite, removeFavorites } from "./favorites";
import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: { favoriteMeals: favoritesReducer },
});
