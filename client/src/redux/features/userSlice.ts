import { createAsyncThunk, createSlice, /*PayloadAction*/ } from "@reduxjs/toolkit"
import { User } from "../../types"

export interface UserState {
    users: Array<User>,
    user: User | undefined,
    darkMode: boolean
}

const initialState: UserState  = {
    users: [],
    user: undefined,
    darkMode: false
}

export const fetchUsuarios = createAsyncThunk("usuario/fetch", async () => {
    const response = await fetch("http://localhost:3001/usuario/all", { method: "GET" })
    const data = await response.json()
    return data
})

export const loginUser = createAsyncThunk("usuario/get", async (user: User) => {
    const response = await fetch("http://localhost:3001/usuario", { 
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    const data = await response.json()
    return data
})

export const registerUser = createAsyncThunk("usuario/post", async (user: User) => {
    const response = await fetch("http://localhost:3001/usuario", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    const data = await response.json()
    return data
})

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUsuarios.fulfilled, (state, action) => {
            state.users = action.payload
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.users.push(action.payload)
            state.user = action.payload
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    },
})

export default UserSlice.reducer;
export const { toggleDarkMode } = UserSlice.actions; 