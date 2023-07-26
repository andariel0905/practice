import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { ArtistSlice } from "./features/artistSlice";
import { UserSlice } from "./features/userSlice";
import { DataSlice } from "./features/dataSlice";

export const store = configureStore({
    reducer: {
        artist: ArtistSlice.reducer,
        data: DataSlice.reducer,
        user: UserSlice.reducer
    }
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;