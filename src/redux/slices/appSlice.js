import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'

const initialState = {
  data: {
    avatarPreview: false,
    login: true,
    successMsg: [],
    errorMsg: [],
    createExpense: false,
    addMember: false,
    createGroup: false,
    showMembers: false,
    topBarHeight: 0,
    sideBarWidth: 0,
    membersIcon: false
  },
  status: 'idle'
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetAppState: () => initialState,
    saveAppState: (state, action) => {
      state.data = { ...state.data, ...action.payload }
    }
  }
})

export const { saveAppState, resetAppState } = appSlice.actions
export default appSlice.reducer
