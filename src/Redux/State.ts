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
}
type sideBarType = {
}

export type RootStateType = {
    messagePage: messagePageType
    postPage:postPageType
   /* sideBar: {}*/
}

export const addPost = (postText:string)=> {
    const newPost:postDataTextType = {
        id:new Date().getTime(),
        post: postText,
        qtyLike: 0
    };
    state.postPage.postDataText.push(newPost);
}




let state:RootStateType = {
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
        ]
    },
/*    sideBar: {}*/
}
export default state;

