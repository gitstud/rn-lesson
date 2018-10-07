import {
    GET_CONTACTS,
} from '../actions/friends';

const initialState = {
    contacts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                error: null,
            };
        default:
            return state;
    }
}
