import { createAsyncThunk, createSlice, /*PayloadAction*/ } from "@reduxjs/toolkit"
import { User } from "../../types"
export interface UserState {
    users: Array<User>,
    darkMode: boolean
}

const initialState: UserState  = {
    users: [],
    darkMode: false
}

export const fetchUsuarios = createAsyncThunk("usuario/fetch", async () => {
    const response = await fetch("http://localhost:3001/usuario", { method: "GET" })
    const data = await response.json()
    return data
})

export const postUsuario = createAsyncThunk("usuario/post", async (user: User) => {
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
        // addUsuario: (state, action: PayloadAction<User>) => {
        //     state.users.push({
        //         name: action.payload.name,
        //         password: action.payload.password,
        //         email: action.payload.email
        //     })
        // }
    },
    extraReducers(builder) {
        builder.addCase(fetchUsuarios.fulfilled, (state, action) => {
            state.users = action.payload
        })

        builder.addCase(postUsuario.fulfilled, (state, action) => {
            state.users.push(action.payload)
        })
    },
})

export default UserSlice.reducer;
export const { toggleDarkMode } = UserSlice.actions; 