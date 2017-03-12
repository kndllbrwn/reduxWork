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

const store = redux.createStore(reducer);

const currentState = store.getState();
console.log('currentState', currentState);



store.dispatch({
    type: "CHANGE_NAME",
    name: "Ken"
});

console.log('Name should be Ken', store.getState());