import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_ROOT } from 'utilities/constants'

// Phương: Khởi tạo giá trị của một Slice trong redux
const initialState = {
  currentSetting: {
    notification: {
      updateFromFollowing: false,
      comments: false,
      events: false
    },
    darkMode: false
  }
}

// Phương: tạm thời cho setting được lấy về từ DB, có thể về sau sẽ đổi sang LocalStorage
// Phương: Các hành động gọi api (bất đồng bộ) và cập nhật dữ liệu vào Redux, dùng createAsyncThunk đi kèm với extraReducers
// Phương: https://redux-toolkit.js.org/api/createAsyncThunk
// Phương: Khởi tạo một slice trong redux store
export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    // Phương: Lưu ý luôn là ở đây cần cặp ngoặc nhọn cho function trong reducer cho dù code bên trong chỉ có 1 dòng, đây là rule của Redux
    // Phương: https:// Phương:redux-toolkit.js.org/usage/immer-reducers#mutating-and-returning-state
    updateNotification: (state, action) => {
      const notification = action.payload
      state.currentSetting.notification = notification
    },
    updateDarkMode: (state, action) => {
      const darkMode = action.payload
      state.currentSetting.darkMode = darkMode 
    }
  }
})

// Phương: Action creators are generated for each case reducer function
// Phương: Actions: dành cho các components bên dưới gọi bằng dispatch() tới nó để cập nhật lại dữ liệu thông qua reducer (chạy đồng bộ)
// Phương: Để ý ở trên thì không thấy properties actions đâu cả, bởi vì những cái actions này đơn giản là được thằng redux tạo tự động theo tên của reducer nhé.
export const {
  updateNotification,
  updateDarkMode
  // Phương
} = settingSlice.actions

// Phương: Selectors: mục đích là dành cho các components bên dưới gọi bằng useSelector() tới nó để lấy dữ liệu từ trong redux store ra sử dụng

export const selectCurrentSetting = (state) => {
  return state.setting.currentSetting
}


// Phương: Export default cái settingReducer của chúng ta để combineReducers trong store
export const settingReducer = settingSlice.reducer