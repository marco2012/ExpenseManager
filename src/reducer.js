import {createStore,combineReducers} from "redux";
import {uuid} from 'uuid';

const addExpense = ({
        description = '',
        note = '',
        amount=0,
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const expenseRedurerDefaultState = [];
const expenseReducer = (state = expenseRedurerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        default:
            return state;
    }
};

const filtersRedurerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};
const filtersReducer = (state = filtersRedurerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer,
    })
);

store.subscribe(() => {
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({description: 'rent', amount: 300}))
store.dispatch(removeExpense({id: expenseOne.expense.id}));

const demoState = {
    expenses : {
        id: 'sdcdsc',
        description: 'January rent',
        note: 'Final payment for address',
        amount: 54500,
        createdAt: 0
    },
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined,
    }
};

const user = {
    name: 'jane',
    age: 24
}
