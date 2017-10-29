"use strict"
import {createStore} from 'redux';

const reducer = function(state={books:[]}, action) {
    switch (action.type) {
        case "POST_BOOK":
            // let books = state.books.concat(action.payload);
            // return {books};
            return {books:[...state.books, ...action.payload]}
    
        default:
            break;
    }

    return state
}

const store = createStore(reducer);

store.subscribe(function() {
    console.log('current state is : ', store.getState());
});

store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 1,
        title: 'this is book title',
        description: 'this is book des',
        price: 111.11
    },
    {
        id: 1,
        title: 'this is book title',
        description: 'this is book des',
        price: 111.11
    }]
});

store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 1,
        title: 'this is book title',
        description: 'this is book des',
        price: 111.11
    }]
});