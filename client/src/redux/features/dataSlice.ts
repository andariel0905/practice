import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Album, Artist, Playlist, Track } from "../../types"

export interface DataState {
    albums: Array<Album>,
    artists: Array<Artist>,
    playlists: Array<Playlist>,
    tracks: Array<Track>
}

const initialState: DataState  = {
    albums: [],
    artists: [],
    playlists: [],
    tracks: []
}

export const getData = createAsyncThunk("data/fetch", async (q: string) => {
    const response = await fetch(`localhost:3001/search/${q}`, { method: "GET" })
    const data = await response.json()
    return data
})

export const AlbumSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        // addAlbum: (state, action: PayloadAction<Array<Album>>) => {
        //     state.albums = action.payload
        // }
    },
    extraReducers(builder) {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.albums = action.payload.albums,
            state.artists = action.payload.artists,
            state.playlists = action.payload.playlists,
            state.tracks = action.payload.tracks
        })
    },
})

export default AlbumSlice.reducer;
// export const { addAlbum } = AlbumSlice.actions;