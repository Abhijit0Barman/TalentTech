import { LOGIN_POST_FAILURE, LOGIN_POST_REQUEST, LOGIN_POST_SUCCESS, REGISTER_POST_SUCCESS } from "../actionTypes.js"

const initialState = {
    isLoading: false,
    msg: "",
    token: JSON.parse(localStorage.getItem("token")) || null,
    isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_POST_REQUEST: {
            return { ...state, isLoading: true };
        }
        case LOGIN_POST_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }
        case LOGIN_POST_SUCCESS: {
            return { ...state, isLoading: false, isError: false, msg: payload.msg, token: payload.token };
        }
        case REGISTER_POST_SUCCESS: {
            return { ...state, isLoading: false, isError: false, msg: payload };
        }
        default:
            return state;
    }
};