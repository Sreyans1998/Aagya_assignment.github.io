import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {UserContext} from '../App';

const NavBar = () => {
    const { state, dispatch } = useContext(UserContext);

    const RenderMenu = () => {
        if (state){
            return (
                <>
                    <li className="nav-item active">
                            <NavLink exact activeClassName='menu_active' className="NavLink" to="/">
                                Home
                            </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName='menu_active' className="NavLink" to="/Login">
                            Logout
                        </NavLink>
                    </li>
                </>
            )
        }else{
            return(
                <>
                    <li className="nav-item active">
                        <NavLink exact activeClassName='menu_active' className="NavLink" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName='menu_active' className="NavLink" to="/Login">
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName='menu_active' className="NavLink" to="/Signin">
                            Sign In
                        </NavLink>
                    </li>
                </>
            )
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <NavLink className="navbar-brand text-light" to="/">
                    Task
                </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto font-weight-bold">
                        <RenderMenu />
                    </ul>
                </div>
            </nav>  
        </>
    )
}

export default NavBar;
<NavLink exact activeClassName='menu_active' className="NavLink" to="/">
                                Home
                            </NavLink>