"use strict"
import {createStore} from 'redux';

import reducers from './reducers/index';

const store = createStore(reducers);

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
        id: 2,
        title: 'this is book title',
        description: 'this is book des',
        price: 222.22
    }]
});

store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 3,
        title: 'this is book title',
        description: 'this is book des',
        price: 333.33
    }]
});

store.dispatch({
    type: "DELETE_BOOK",
    payload: {
        id: 1
    }
});

store.dispatch({
    type: "UPDATE_BOOK",
    payload: {
        id: 3,
        title: 'update book title',
        description: 'this is book des',
        price: 444.444
    }
});



//=========cart
store.dispatch({
    type: "ADD_TO_CART",
    payload: [{
        id: 2
    }]
});

