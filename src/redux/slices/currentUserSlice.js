import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const getUserById = createAsyncThunk('user/getUserById', async (arg, thunkAPI) => {
  try {
    const userId = thunkAPI.getState().userAuth.userId
    const docSnap = await getDoc(doc(db, 'Users', userId))
    console.log(docSnap.data())
    return docSnap.data()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
const initialState = {
  data: {}
}
export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    saveCurrentUserData: (state, action) => {
      state.data = action.payload
      state.status = 'succeeded'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'succeeded'
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  }
})

export const { saveCurrentUserData } = currentUserSlice.actions
export default currentUserSlice.reducer
