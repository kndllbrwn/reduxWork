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

const store = redux.createStore(reducer, redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
));

const unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('searchText is', state.searchText);
    document.getElementById('app').innerHTML = state.searchText;
});

const currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "Something"
});

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "Work"
});

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "finish"
});
// console.log('searchText should be Something', store.getState());