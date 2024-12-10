import { createSlice } from "@reduxjs/toolkit"

interface loginState {
    user: any
}

const initialState: loginState = {
    user: ""
}
const loginSlice = createSlice({
    name:"loginSlice",
    initialState,
    reducers:{}
});

export default loginSlice.reducer
