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
            <div className="w-3/4 px-2 flex flex-col justify-between">
                <div>{messagesElements}</div>
                <div className="flex justify-between">
                    <textarea className="flex-1 bg-transparent border focus:border-purple-600 rounded px-2 p-1 m-1 outline-none resize-x placeholder-purple-300 content-center" placeholder="Message..." rows="1"></textarea>
                    <button className="focus:outline-none">
                        <svg className="h-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
