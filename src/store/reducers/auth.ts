// import { AuthState, User } from '@/types'
// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// const initialState: AuthState = {
//   isLoggedIn: false,
//   user: null,
//   token: null
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login(state, action: PayloadAction<{ user: AuthState['user']; accessToken: string }>) {
//       state.isLoggedIn = true
//       state.user = action.payload.user
//       state.token = action.payload.accessToken
//     },
//     logout(state) {
//       state.isLoggedIn = false
//       state.user = null
//       state.token = null
//     },
//     updateUser(state, action: PayloadAction<{ user: User }>) {
//       state.user = action.payload.user
//     }
//   }
// })

// export default authSlice.reducer

// export const { login, logout, updateUser } = authSlice.actions
