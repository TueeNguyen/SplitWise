import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'

const initialState = {
  data: {
    createGroup: false,
    topBarHeight: 0,
    sideBarWidth: 0,
    showMembers: false,
    membersIcon: false
  },
  status: 'idle'
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    saveAppState: (state, action) => {
      state.data = { ...state.data, ...action.payload }
    }
  }
})

export const { saveAppState } = appSlice.actions
export default appSlice.reducer
