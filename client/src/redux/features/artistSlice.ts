import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Artist } from "../../types"
export interface ArtistState {
    artists: Array<Artist>
}

const initialState: ArtistState  = {
    artists: []
}

export const ArtistSlice = createSlice({
    name: "artist",
    initialState,
    reducers: {
        addArtist: (state, action: PayloadAction<Array<Artist>>) => {
            state.artists = action.payload
        }
    }
})

export default ArtistSlice.reducer;
export const { addArtist } = ArtistSlice.actions;