import React from "react";
import {Link} from "react-router-dom";
import numeral from 'numeral';
import moment from 'moment';

const ExpenseListIem = ({id, description, amount, createdAt}) => {
    return (
        <Link className="list-item" to={`/edit/${id}`}>
            <div className="flex-row">
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__subtitle">€{numeral(amount).format('€0,0.00')}</span>
            </div>
            <h3 className="list-item__data">{moment.unix(createdAt).format("DD/MM/yy")}</h3>
        </Link>
    )
};

export default ExpenseListIem;

