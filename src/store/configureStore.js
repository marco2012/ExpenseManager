import {combineReducers, createStore} from "redux";
import expenseReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filtersReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //support redux dev tools
    );
    return store;
}


