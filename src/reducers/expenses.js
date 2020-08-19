const expenseRedurerDefaultState = [];
const expenseReducer = (state = expenseRedurerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates //override expense values with user defined ones
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

export default expenseReducer;
