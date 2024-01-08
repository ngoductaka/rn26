import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user", // name of the slice, used by Redux
    initialState: { // initial state of the slice, also used by Redux
        user: {
            name: "",
            age: 33,
        },
        isLogin: false,
        token: '',
    },
    reducers: {
        loginSuccess: (state, action) => {
            console.log('action_dndndnd', action.type);
            const { data, token } = action.payload;
            state.user = data;
            state.token = token;
            state.isLogin = true;
        },
        logOut: (state) => {
            state.user = {};
            state.token = '';
            state.isLogin = false;
        }
    }
});

export const { loginSuccess, logOut } = userSlice.actions

export default userSlice.reducer

// store: {
//     user: {
//         name: 'dddd',
//             age: 33
//     }
// }