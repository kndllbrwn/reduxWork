const redux = require('redux');

console.log('Starting redux example');

const stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};

var nextHobbyId  = 1;
var nextMovieId  = 1;

// const oldReducer = (state = stateDefault, action) => {
//     // state = state || {name: 'Anonymous'}

    
//     switch(action.type) {
//         case 'CHANGE_NAME':
//             return {
//                 ...state,
//                 name: action.name
//             };
//         case 'ADD_HOBBY':
//             return {
//                 ...state,
//                 hobbies: [
//                     ...state.hobbies, 
//                     {
//                         id: nextHobbyId++,
//                         hobby: action.hobby
//                     }
//                     ]
//             };
//         case 'REMOVE_HOBBY':
//             return {
//                 ...state,
//                 hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
//             };
//         case 'ADD_MOVIE':
//             return {
//                 ...state,
//                 movies: [
//                     ...state.movies, 
//                     {
//                         id: nextMovieId++,
//                         title: action.title,
//                         genre: action.genre
//                     }
//                     ]
//             };
//         case 'REMOVE_MOVIE':
//             return {
//                 ...state,
//                 movies: state.movies.filter((movie) => movie.id !== action.id)
//             };
//         default:
//             return state
//     }
// };

const nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name
        default:
            return state;
    };
};

const hobbyReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id);
        default:
             return state;
    };
};

const movieReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre
                }
            ];
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id);
        default:
            return state;
    };
};

const reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbyReducer,
    movies: movieReducer
})

const store = redux.createStore(reducer, redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
));

// subscibe to  changes
const unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;

    console.log('New state', store.getState());
});

const currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: "CHANGE_NAME",
    name: "Ken"
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Walking Dead',
    genre: 'Horror'
});

// unsubscribe();

store.dispatch({
    type: "ADD_HOBBY",
    hobby: "Running"
});

store.dispatch({
    type: "ADD_HOBBY",
    hobby: "Walking"
});

store.dispatch({
    type: "REMOVE_HOBBY",
    id: 2
});

store.dispatch({
    type: "REMOVE_MOVIE",
    id: 1
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Logan',
    genre: 'Action'
});

store.dispatch({
    type: "CHANGE_NAME",
    name: "Lamont"
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Get Out',
    genre: 'Romance'
});