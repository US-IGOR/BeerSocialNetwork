import {combineReducers, createStore} from "redux";
import MessageReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";

let rootReducer = combineReducers({
 postPage : ProfileReducer,
 messagePage : MessageReducer,
 usersPage : UsersReducer,
})


 let store = createStore(rootReducer);


export type AppStateType = ReturnType<typeof rootReducer>;


// @ts-ignore
window.store = store;

export default store;