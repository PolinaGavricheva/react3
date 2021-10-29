import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

