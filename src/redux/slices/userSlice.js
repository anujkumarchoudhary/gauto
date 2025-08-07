import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    userInfo: null,
    pending: false,
    error: null
}

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (body, thunkAPI) => {
        try {
            const res = await axios.post(`http://localhost:5000/api/auth/register`, body, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res, "res>>>>")
            return res.data;
        }
        catch (err) {
            console.log("err", err)
            return thunkAPI.rejectWithValue(err.res.data || "error")
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (body, thunkAPI) => {
        try {
            const res = await axios.post(`http://localhost:5000/api/auth/login`, body, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res, "res>>>>")
            return res.data;
        }
        catch (err) {
            console.log("err", err)
            return thunkAPI.rejectWithValue(err.res.data || "error")
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload;

        },
        clearUser: (state, action) => {
            state.userInfo = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.pending = true,
                    state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.pending = false
                state.userInfo = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.pending = false,
                    state.error = action.payload
            })
            .addCase(loginUser.pending, (state, action) => {
                state.pending = true,
                    state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.pending = false
                state.userInfo = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.pending = false,
                    state.error = action.payload
            })
    }

})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer