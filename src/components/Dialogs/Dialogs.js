import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map(dlg => <Dialog name={dlg.name} id={dlg.id}/>);

    const messagesElements = props.state.messages.map(msg => <Message message={msg.message}/>);

    return (
        <div className="flex p-1 shadow rounded bg-white divide-x divide-purple-600">
            <div className="w-1/4 px-2">
                {dialogsElements}
            </div>
            <div className="w-3/4 px-2">
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
