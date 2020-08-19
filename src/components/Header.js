import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/" >
                        <h1>ExpenseManager</h1>
                    </Link>
                    <button className="button button--link">Login</button>
                </div>
            </div>
        </header>
    )
};

export default Header;
