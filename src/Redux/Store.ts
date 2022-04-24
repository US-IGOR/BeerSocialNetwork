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
type postDataTextType = {
    id: number
    post: string
    qtyLike: number
}
 type messagePageType = {
    dialogs: Array<messagesDataUsersType>
    messages: Array<messagesDataTextType>
    newMessageBody: string
}
type postPageType = {
    postDataText: Array<postDataTextType>
    newPostText: string
    profile:any
    status:string
}
export type RootStateType = {
    messagePage: messagePageType
    postPage: postPageType
    auth:authType
    /* sideBar: {}*/
}


type authType = {
    id: null | number,
    email: null | string,
    login: null| string,
    isAuth: boolean
};

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
            dialogs: [
                {id: 1, name: 'Igor'},
                {id: 2, name: 'Evgenia'},
                {id: 3, name: 'Roma'},
            ],
            messages: [
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

            newPostText: '',
            status:"/",
            profile: null

        },
        auth: {
            id: 1,
            email: '1',
            login: '1',
            isAuth: false
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

