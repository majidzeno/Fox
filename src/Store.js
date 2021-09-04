import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Components/Slices/rootSlice";

const store = configureStore({ reducer: rootReducer });

export default store;
