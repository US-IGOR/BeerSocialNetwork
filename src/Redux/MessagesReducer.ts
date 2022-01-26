import {messagePageType} from "./Store";

export type actionsMessagesReducerTypes =
    ReturnType<typeof updMessageBodyAC>
    | ReturnType<typeof sendMessageAC>


let initialState:messagePageType =  {

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
    };

const MessageReducer = (state: messagePageType = initialState, action: actionsMessagesReducerTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody
            return state

        case SEND_MESSAGE:

            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesDataText.push({id: 9, textMessage: body})
            return state
        default :
            return state

    }


}


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-BODY';


export const updMessageBodyAC = (text: string) => (
    {

        type: UPDATE_NEW_MESSAGE_BODY,
        newMessageBody: text
    } as const
)
export const sendMessageAC = () => (
    {
        type: SEND_MESSAGE

    } as const
)


export default MessageReducer;