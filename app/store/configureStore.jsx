const redux = require('redux');
const thunk = require('redux-thunk').default;
var {nameReducer, hobbyReducer, movieReducer, mapReducer} = require('./../reducers/index');

export const configure = () => {
    const reducer = redux.combineReducers({
        name: nameReducer,
        hobbies: hobbyReducer,
        movies: movieReducer,
        map: mapReducer
    });

    var createStoreWithMiddleware = redux.applyMiddleware(thunk)(redux.createStore);
    const store = createStoreWithMiddleware(
        reducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && 
        window.__REDUX_DEVTOOLS_EXTENSION__()
        )

    return store;
}