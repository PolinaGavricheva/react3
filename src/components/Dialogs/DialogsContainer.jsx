import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import React from 'react';

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;