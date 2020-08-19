import React from 'react';
import './App.css';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import {Provider} from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 43.34, createdAt: 1597782775, note: 'expensive'}));
store.dispatch(addExpense({description: 'Gas bill', amount: 22.89, createdAt: 1597782775, note: 'needed'}));
store.dispatch(addExpense({description: 'Rent', amount: 343.44, createdAt: 1597782775, note: 'great aparment'}));
store.dispatch(addExpense({description: 'Netflix', amount: 7, createdAt: 1597782775, note: 'tv shows'}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)

function App() {
  return (
      // provides the store to all components of the app
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
