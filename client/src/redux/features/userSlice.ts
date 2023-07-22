import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
    name: string,
    password: string,
    email: string
}

export interface UserState {
    users: Array<User>
}

const initialState: UserState = {
    users: []
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        postUsuario: (state, action: PayloadAction<User>) => {
            state.users.push({
                name: action.payload.name,
                password: action.payload.password,
                email: action.payload.email
            })
        }
    }
})

export default UserSlice.reducer;
export const { postUsuario } = UserSlice.actions; 