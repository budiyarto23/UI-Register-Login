import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';

export default combineReducers({
    pikachu: () => 'Ryan',
    auth: AuthReducer

});