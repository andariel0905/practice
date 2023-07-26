import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Album, Artist, Playlist, SearchProps, Track } from "../../types"

export interface DataState {
    albums: Array<Album>,
    artists: Array<Artist>,
    playlists: Array<Playlist>,
    tracks: Array<Track>,
    searchProps: SearchProps
}

const initialState: DataState  = {
    albums: [],
    artists: [],
    playlists: [],
    tracks: [],
    searchProps: {
        q: "",
        albums: false,
        artists: false,
        playlists: false,
        tracks: false
    } 
}

export const getData = createAsyncThunk("data/fetch", async (q: string) => {
    const response = await fetch(`localhost:3001/search/${q}`, { method: "GET" })
    const data = await response.json()
    return data
})

export const DataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setStateSearchProps: (state, action: PayloadAction<SearchProps>) => {
            state.searchProps = action.payload
        }
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

export default DataSlice.reducer;
export const { setStateSearchProps } = DataSlice.actions;