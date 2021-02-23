import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => <div className={s.message}>{props.message}</div>;

const Dialogs = (props) => {
    const dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Sasha'}
    ];

    const dialogsElements = dialogs.map(dlg => <Dialog name={dlg.name} id={dlg.id}/>);

    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Buy'}
    ];

    const messagesElements = messages.map(msg => <Message message={msg.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
