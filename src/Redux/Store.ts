import ProfileReducer, {actionsProfileReducerTypes} from "./ProfileReducer";
import MessageReducer, {actionsMessagesReducerTypes} from "./MessagesReducer";

type messagesDataUsersType = {
    id: number
    name: string
}
type messagesDataTextType = {
    id: number
    textMessage: string
}
export type postDataTextType = {
    id: number
    post: string
    qtyLike: number
}
export type messagePageType = {
    messagesDataUsers: Array<messagesDataUsersType>
    messagesDataText: Array<messagesDataTextType>
    newMessageBody: string
}
export type postPageType = {
    postDataText: Array<postDataTextType>
    newPostText: string
}
export type RootStateType = {
    messagePage: messagePageType
    postPage: postPageType
    /* sideBar: {}*/
}

export  type storeType = {
    _state: RootStateType
    subscribe: (orb: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: actionsTypes) => void
}
export type actionsTypes = actionsProfileReducerTypes | actionsMessagesReducerTypes


const store: storeType = {
    _state: {
        messagePage: {
            messagesDataUsers: [
                {id: 1, name: 'Igor'},
                {id: 2, name: 'Evgenia'},
                {id: 3, name: 'Roma'},
            ],
            messagesDataText: [
                {id: 1, textMessage: 'Hi'},
                {id: 2, textMessage: 'Hello, whats up?'},
                {id: 3, textMessage: 'How are you?'},
            ],
            newMessageBody: ''
        },
        postPage: {
            postDataText: [
                {id: 1, post: 'Hi', qtyLike: 5},
                {id: 2, post: 'Helol, whuts uuup?', qtyLike: 1},
                {id: 3, post: 'How are you?', qtyLike: 2},
            ],
            newPostText: ''

        },
    },
    _callSubscriber() {   // OnChange
        console.log('state changed')
    },
    subscribe(orb: () => void) {
        this._callSubscriber = orb;
    },
    getState() {
        return this._state;
    },
    dispatch(action: any) { // type: 'ADD-POST'
        this._state.postPage = ProfileReducer(this._state.postPage, action)
        this._state.messagePage = MessageReducer(this._state.messagePage, action)
        this._callSubscriber()
    }
}

export default store;

// @ts-ignore
window.store = store

