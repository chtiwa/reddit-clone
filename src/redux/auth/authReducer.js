import {
  SET_LOADING,
  SET_ERROR,
  AUTH,
  // LOGIN,
  // SIGNUP,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  LOGOUT,
  CHECK_LOGIN
} from './authTypes'

const initialState = {
  name: null,
  userImage: null,
  userId: null,
  success: false,
  message: '',
  isLoggedIn: false,
  loading: false,
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: return {
      ...state,
      loading: true,
      success: false,
      error: false
    }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false
      }
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }))
      return {
        ...state,
        name: action.payload.name,
        userImage: action.payload.image,
        userId: action.payload.userId,
        isLoggedIn: true,
        loading: false,
        error: false
      }
    case LOGOUT:
      localStorage.clear()
      return {
        name: '',
        userImage: '',
        isLoggedIn: false,
        error: false,
        loading: false
      }
    case CHECK_LOGIN:
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }))
      return {
        ...state,
        name: action.payload.name,
        isLoggedIn: action.payload.isLoggedIn,
        userImage: action.payload.image,
        userId: action.payload.userId,
        loading: false,
        error: false
      }
    case FORGOT_PASSWORD:
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
        loading: false,
        error: false
      }
    case RESET_PASSWORD: return {
      ...state,
      success: action.payload.success,
      message: action.payload.message,
      loading: false,
      error: false
    }
    default: return state
  }
}

export default reducer