const redux = require('redux');

console.log('Starting redux example');

const actions = require('./actions/index');
const store = require('./store/configureStore').configure();

// subscibe to  changes
const unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('New state', store.getState());

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
    }
});

const currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName("Ken"));
store.dispatch(actions.addMovie('Walking Dead', 'Horror'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.removeMovie(1));
store.dispatch(actions.addMovie('Logan', 'Action'));
store.dispatch(actions.changeName("Lamont"));
store.dispatch(actions.addMovie('Get Out', 'Romance'));

// store.dispatch({
//     type: "CHANGE_NAME",
//     name: "Ken"
// });

// store.dispatch({
//     type: 'ADD_MOVIE',
//     title: 'Walking Dead',
//     genre: 'Horror'
// });


// unsubscribe();

// store.dispatch({
//     type: "ADD_HOBBY",
//     hobby: "Running"
// });


// store.dispatch({
//     type: "ADD_HOBBY",
//     hobby: "Walking"
// });


// store.dispatch({
//     type: "REMOVE_HOBBY",
//     id: 2
// });


// store.dispatch({
//     type: "REMOVE_MOVIE",
//     id: 1
// });


// store.dispatch({
//     type: 'ADD_MOVIE',
//     title: 'Logan',
//     genre: 'Action'
// });

// store.dispatch({
//     type: "CHANGE_NAME",
//     name: "Lamont"
// });

// store.dispatch({
//     type: 'ADD_MOVIE',
//     title: 'Get Out',
//     genre: 'Romance'
// });

// const stateDefault = {
//     name: 'Anonymous',
//     hobbies: [],
//     movies: []
// };

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