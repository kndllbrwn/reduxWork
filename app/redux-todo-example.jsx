const redux = require('redux');

console.log('Starting redux example');

const stateDefualt = {
    searchText: '', 
    searchCompleted: null, 
    todos: []
}

const reducer = (state = stateDefualt, action) => {
// state = state || stateDefualt;

return state;
};

const store = redux.createStore(reducer);

const currentState = store.getState();
console.log('currentState', currentState);