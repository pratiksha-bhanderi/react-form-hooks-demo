import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { formSlice } from './slice/FormSlice'
const rootReducer=combineReducers({
    form: formSlice.reducer,
})
const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof rootReducer>

export default store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()