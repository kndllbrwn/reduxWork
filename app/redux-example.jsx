const redux = require('redux');

console.log('Starting redux example');

const reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'}

    
    switch(action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state
    }
};

const store = redux.createStore(reducer, redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
));

// subscibe to  changes
const unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
});

const currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: "CHANGE_NAME",
    name: "Ken"
});

// unsubscribe();

store.dispatch({
    type: "CHANGE_NAME",
    name: "Lamont"
});