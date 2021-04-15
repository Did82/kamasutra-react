import Friend from "./Friend/Friend";

const Friends = (props) => {
    const friendsList = props.state.dialogs.map(dlg => <Friend name={dlg.name}/>);

    return (
        <section className="bg-white rounded m-1 p-1 text-sm shadow">
            <h2 className="text-lg font-bold pl-2">Friends:</h2>
            <div className="flex flex-wrap items-center justify-between">
                {friendsList}
            </div>
        </section>
    )
}

export default Friends;
