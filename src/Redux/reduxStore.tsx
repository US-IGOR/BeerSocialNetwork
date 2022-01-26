import {combineReducers, createStore} from "redux";
import MessageReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";

let reducers = combineReducers({
 postPage : ProfileReducer,
 messagePage : MessageReducer
})


 let store = createStore(reducers);


export default store;