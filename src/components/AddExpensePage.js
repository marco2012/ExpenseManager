import React from "react";
import ExpenseForm from "./ExpenseForm";
import {connect} from "react-redux";
import {addExpense} from "../actions/expenses";

const AddExpensePage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    onSubmit={(expense) => {
                        props.dispatch(addExpense(expense));
                        props.history.push('/');
                    }}
                />
            </div>
        </div>
    )
};

export default connect()(AddExpensePage);
