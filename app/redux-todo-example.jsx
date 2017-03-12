const redux = require('redux');

console.log('Starting redux example');

const stateDefualt = {
    searchText: '', 
    searchCompleted: null, 
    todos: []
}

const reducer = (state = stateDefualt, action) => {
// state = state || stateDefualt;

switch(action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state
    }
};

const store = redux.createStore(reducer);

const currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "Something"
});

console.log('searchText should be Something', store.getState());