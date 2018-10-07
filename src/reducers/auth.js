import {
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    UPDATE_PASSWORD2,
    REGISTER_ERROR,
    LOGIN_ERROR,
    PASSWORD_RESET_ERROR,
    LOGGED_IN,
    LOGGED_OUT,
} from '../actions/auth';

const initialState = {
    email: '',
    password: '',
    user: null,
    userChecked: false,
}

export default (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload,
                error: null,
            };
        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.payload,
                error: null,
            };
        case UPDATE_PASSWORD2:
            return {
                ...state,
                password2: action.payload,
                error: null,
            };
        case REGISTER_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case PASSWORD_RESET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case LOGGED_IN:
            return {
                ...state,
                user: action.payload,
                userChecked: true
            };
        case LOGGED_OUT:
            return {
                ...state,
                user: null,
                userChecked: true
            };
        default:
            return state;
    }
}
