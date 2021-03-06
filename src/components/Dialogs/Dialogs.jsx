import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import React from 'react';
import {Redirect} from "react-router";

const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea placeholder='Enter your message'
                                       value={newMessageBody}
                                       onChange={onNewMessageChange}></textarea></div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;