import React from "react";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <h1>ExpenseManager</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </header>
    )
};

export default Header;
