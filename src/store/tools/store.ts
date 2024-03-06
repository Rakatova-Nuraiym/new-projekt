import { configureStore } from "@reduxjs/toolkit";
import TodoSlece from "./TodoSlece";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
export const store = configureStore({
  reducer: TodoSlece,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
