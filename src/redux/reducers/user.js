import { createSlice } from '@reduxjs/toolkit';

const admin = {
    email: 'testAdmin@gmail.com',
    password: '12345yuiopp'
};

const user = {
    email: '',
    password: '',
    role: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        admin,
        ...user
    },
    reducers: {
        login: (state, action) => {
            const role = JSON.stringify(state.admin) === JSON.stringify(action.payload);
            return {
                ...state,
                ...action.payload,
                role: role ? 'admin' : 'user',
                admin
            };
        },
        logout: state => ({
            ...state,
            ...user
        })
    }
});

const userReducer = userSlice.reducer;

export const { login, logout } = userSlice.actions;

export default userReducer;
