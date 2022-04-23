import {applyMiddleware, combineReducers, createStore} from "redux";
import MessageReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./AuthRedicer";
import thunkMiddleware from 'redux-thunk';
//import thunk from "redux-thunk";


export type AppStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
 postPage : ProfileReducer,
 messagePage : MessageReducer,
 usersPage : UsersReducer,
 auth: authReducer,
})



 let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));





// @ts-ignore
window.store = store;

export default store;