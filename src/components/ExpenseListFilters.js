import React from "react";
import {connect} from "react-redux";
import {setTextFilter, sortByAmount, sortByDate} from "../actions/filters";

class ExpenseListFilters extends React.Component {
    state = {

    }
    onDatesChange = ({startDate, endDate}) => {
        console.log(startDate, endDate)
    }
    flexStyle = {flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center'};
    render() {
        return (
            <div className="content-container">
                <div className="input--group">
                    <div className="input--group__item">
                        <input
                            size="12"
                            type="text"
                            className="text-input"
                            placeholder="Search"
                            value={this.props.filters.text}
                            onChange={(event) => {
                                this.props.dispatch(setTextFilter(event.target.value));
                            }}
                        />
                    </div>
                    <div className="input--group__item">
                        <select
                            className="select"
                            id="sortSelect"
                            value={this.props.filters.sortBy}
                            onChange={(e) => {
                                if (e.target.value === 'date') {
                                    this.props.dispatch(sortByDate())
                                } else if (e.target.value === 'amount') {
                                    this.props.dispatch(sortByAmount())
                                }
                            }}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);
