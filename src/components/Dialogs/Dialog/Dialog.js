import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
            <NavLink to={path} className="nav" activeClassName="active">
                {props.name}
            </NavLink>
    );
};

export default Dialog;
