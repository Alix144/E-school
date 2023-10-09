import {configureStore, createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "auth",
    initialState: {isLoggedIn: false},
    reducers: {
        login(state){
            state.isLoggedIn = true
        },
        logout(state){
            localStorage.removeItem("userId")
            state.isLoggedIn = false
        }
    }
})

// const nameSlice = createSlice({
//     name: "name",
//     initialState: {name: ""},
//     reducers: {
//         setName(state, action){
//             state.name = action.payload;
//         }
//     }
// })

const roleSlice = createSlice({
    name: "role",
    initialState: {role: ""},
    reducers: {
        admin(state){
            state.role = "admin"
        },
        teacher(state){
            state.role = "teacher"
        },
        student(state){
            state.role = "student"
        },
        clear(state){
            state.role = ""
        },
    }
})

export const authActions = authSlice.actions;
// export const nameActions = nameSlice.actions;
export const roleActions = roleSlice.actions;

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        role: roleSlice.reducer,
        // name: nameSlice.reducer
    }

})