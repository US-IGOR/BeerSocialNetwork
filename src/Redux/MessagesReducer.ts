import {messagePageType} from "./State";

export type actionsMessagesReducerTypes =
    ReturnType<typeof updMessageBodyAC>
    | ReturnType<typeof sendMessageAC>


const MessageReducer = (state: messagePageType, action: actionsMessagesReducerTypes) => {

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