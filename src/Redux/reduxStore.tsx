import {combineReducers, createStore} from "redux";
import MessageReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";

let rootReducer = combineReducers({
 postPage : ProfileReducer,
 messagePage : MessageReducer
})


 let store = createStore(rootReducer);


export type AppStateType = ReturnType<typeof rootReducer>;


// @ts-ignore
window.store = store;

export default store;