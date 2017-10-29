"use strict"
import {createStore} from 'redux';

const reducer = function(state={}, action) {
    switch (action.type) {
        case "POST_BOOK":
            return state = action.payload;
    
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
    payload: {
        id: 1,
        title: 'this is book title',
        description: 'this is book des',
        price: 111.11
    }
});