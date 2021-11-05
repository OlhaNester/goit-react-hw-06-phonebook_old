import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-sxtension';
import phonebookReduce from './phonebook-reducer';

// const state = {
//     contacts: {
//         items: [],
//         filters: ''
//     }
// };

const rootReducer = combineReducer({
    contacts: phonebookReduce,
});



const store = createStore(rootReducer, composeWithDevTools());
export default store;
    
