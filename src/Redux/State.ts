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
    messagesDataUsers: Array<messagesDataUsersType>
    messagesDataText: Array<messagesDataTextType>
    newMessageBody: string
}
type postPageType = {
    postDataText: Array<postDataTextType>
    newPostText: string
}
type sideBarType = {}
export type RootStateType = {
    messagePage: messagePageType
    postPage: postPageType
    /* sideBar: {}*/
}


export type addPostActionType = {
    type: 'ADD-POST'
}
export type updNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    updNewPostText: string
}
export type updNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    newMessageBody: string
}
export type sendBodyActionType = {

    type: 'SEND-BODY',
    textMessage?: string,
    id?: number
}


export  type storeType = {
    _state: RootStateType
    subscribe: (orb: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: addPostActionType
        | updNewPostTextActionType
        | updNewMessageBodyActionType
        | sendBodyActionType ) => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-BODY';


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
        /*    sideBar: {}*/
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(orb: () => void) {
        this._callSubscriber = orb;
    },

    dispatch (action: addPostActionType | updNewPostTextActionType | updNewMessageBodyActionType|sendBodyActionType) { // type: 'ADD-POST'
        if ('ADD-POST' === action.type) {
            debugger
            const newPost: postDataTextType = {
                id: new Date().getTime(),
                post: this._state.postPage.newPostText,

                //  post: postText,
                qtyLike: 0
            }
            this._state.postPage.postDataText.unshift(newPost);
            this._callSubscriber();
        } else if
        (action.type === 'UPDATE-NEW-POST-TEXT') {
            {
                this._state.postPage.newPostText = action.updNewPostText;
                this._callSubscriber()
            }
        } else if
        (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
           this._state.messagePage.newMessageBody = action.newMessageBody
            this._callSubscriber()
        } else if
        (action.type === 'SEND-BODY') {
            let body = this._state.messagePage.newMessageBody
            this._state.messagePage.newMessageBody = ''
            this._state.messagePage.messagesDataText.push({id: 9, textMessage: body})
            this._callSubscriber()
        }
    }
}


export const addPostAC = () => (
    {
        type: ADD_POST
    }
)
export const updNewPostTextAC = (text: string) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        updNewPostText: text
    }
)
export const updMessageBodyAC = (text: string) => (
 {

        type: UPDATE_NEW_MESSAGE_BODY,
     newMessageBody: text
    }
)
export const sendMessageAC = () => (
    {
        type: SEND_MESSAGE

    }
)


//const fake = () => 5;  const fake = () => {return 5};


export default store;

// @ts-ignore
window.store = store

