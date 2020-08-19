import React from "react";
import { connect } from 'react-redux';
import ExpenseListIem from "./ExpenseListIem";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = (props) => {
    return (
        <div id="expenseList" className="content-container">
            <div className="list-border">
                <div className="list-header">
                    <div className="show-for-desktop">Expense</div>
                    <div className="show-for-desktop">Amount</div>
                </div>
                {props.expenses.map((expense) => {
                    return <ExpenseListIem key={expense.id} {...expense}/>
                })}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
    };
}
export default connect(mapStateToProps)(ExpenseList);

