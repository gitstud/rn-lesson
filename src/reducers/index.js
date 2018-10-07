import { combineReducers } from 'redux';
import auth from './auth';
import friends from './friends';

export default combineReducers({
    auth,
    friends
})
