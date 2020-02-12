import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';

const Dialogs = (props) => {

    let dialogs = props.dialogPage.dialogsData.map(el => <DialogItem id={el.id} name={el.name} />)
    let messages = props.dialogPage.messageData.map(el => <MessageItem message={el.message} />)

    let newMessageElement = React.createRef();
    let updateTextArea = () => {
        props.updateMessageText(newMessageElement.current.value)
    }

    return (
        <div className={s.dialog}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>
                    {messages}
                </div>
                <div>
                    <textarea onChange={updateTextArea} ref={newMessageElement} value={props.dialogPage.newMessageText} />
                </div>
                <div>
                    <button onClick={props.addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;