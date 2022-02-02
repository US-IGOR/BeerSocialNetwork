import {combineReducers, createStore} from "redux";
import MessageReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";

let reducers = combineReducers({
 postPage : ProfileReducer,
 messagePage : MessageReducer
})


 let store = createStore(reducers);


// @ts-ignore
window.store = store;

export default store;