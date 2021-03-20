import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-1/4 p-1">
            <NavLink to="/profile" className="nav" activeClassName="active">Profile</NavLink>
            <NavLink to="/dialogs" className="nav" activeClassName="active">Messages</NavLink>
            <NavLink to="/news" className="nav" activeClassName="active">News</NavLink>
            <NavLink to="/music" className="nav" activeClassName="active">Music</NavLink>
            <NavLink to="/settings" className="nav" activeClassName="active">Settings</NavLink>
        </nav>
    )
}

export default Navbar
