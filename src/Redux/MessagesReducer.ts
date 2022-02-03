

export type actionsMessagesReducerTypes =
    ReturnType<typeof updMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export type DialogsType = {
    id: number,
    name: string
}
export type messagesType = {
    id: number,
    textMessage: string
}


let initialState = {

    dialogs: [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Evgenia'},
        {id: 3, name: 'Roma'},
    ] as Array <DialogsType>,
    messages: [
        {id: 1, textMessage: 'Hi'},
        {id: 2, textMessage: 'Hello, whats up?'},
        {id: 3, textMessage: 'How are you?'},
    ] as Array <messagesType>,
    newMessageBody: ''
};

export type  messagePageType = typeof initialState;




const MessageReducer = (state: messagePageType = initialState, action: actionsMessagesReducerTypes):messagePageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newMessageBody
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 9, textMessage: body}],

            };
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