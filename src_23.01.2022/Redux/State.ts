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

type action = {
    type: string
}

export  type storeType = {
    _state: RootStateType
    /*addPost: (postText: string) => void
    updNewPostText: (updNewPostText: string) => void*/
    subscribe: (orb: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: any) => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


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
                {id: 2, textMessage: 'Helol, whuts uuup?'},
                {id: 3, textMessage: 'How are you?'},
            ]
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

    /*    addPost(postText: string) {
            const newPost: postDataTextType = {
                id: new Date().getTime(),
                post: postText,
                qtyLike: 0
            };
            this._state.postPage.postDataText.push(newPost);
            this._callSubscriber();
        },
        updNewPostText(updNewPostText: string) {
            this._state.postPage.newPostText = updNewPostText;
            this._callSubscriber()
        },*/

    dispatch(action) { // type: 'ADD-POST'
        if (action.type === 'ADD-POST') {
            debugger
            const newPost: postDataTextType = {
                id: new Date().getTime(),
                post: this._state.postPage.newPostText,

                //  post: postText,
                qtyLike: 0
            }
            this._state.postPage.postDataText.unshift(newPost);
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            {
                this._state.postPage.newPostText = action.updNewPostText;
                this._callSubscriber()
            }
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


//const fake = () => 5;  const fake = () => {return 5};


export default store;

// @ts-ignore
window.store = store

