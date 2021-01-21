import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/userSlice";

import './style.css';

export default function Menu() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">VS Blog</a>
            {(!user)? (
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <NavLink to='/login' className="nav-link" >Log in</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/registration'className="nav-link">Sign in</NavLink>
                    </li>
                </ul>) : (
                <ul className="navbar-nav justify-content-end">
                    <h3 className="navbar-nav justify-content-end">{user.name}</h3>
                    <li className="nav-item">
                        <a onClick={onLogout} className="nav-link" >Log out</a>
                    </li>
                </ul>)
            }
        </nav>
    )
}