import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  account: ''
}

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    signInWallet(state, action: PayloadAction<{ account: string }>) {
      state.account = action.payload.account
    },
    signOutWallet(state) {
      state.account = ''
    }
  }
})

export default walletSlice.reducer

export const { signInWallet, signOutWallet } = walletSlice.actions
