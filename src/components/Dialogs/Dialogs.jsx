import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import React from 'react';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Polina'},
        {id: 3, name: 'Dasha'},
        {id: 4, name: 'Gleb'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Olga'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Random message'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map( d =>
        <DialogItem name={d.name} id={d.id}/>
    )

    let messagesElements = messages.map( m =>
        <Message message={m.message}/>
    )

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;