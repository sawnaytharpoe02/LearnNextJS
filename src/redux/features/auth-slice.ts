import { createSlice , PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  uid: string;
  name: string;
  isModerator: boolean;
};

const initialState = {
  value: {
    isAuth: false,
    uid: '',
    name: '',
    isModerator: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (_state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          uid: "askjfhsd2323kfhskdhf3984",
          name: action.payload,
          isModerator: false
        }
      }
    },
    toggleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator;
    }
  },
});

export const { logout, login, toggleModerator } = auth.actions;
export default auth.reducer
