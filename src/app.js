"use strict"
import {createStore} from 'redux';

const reducer = function(state={books:[]}, action) {
    switch (action.type) {
        case "POST_BOOK":
            // let books = state.books.concat(action.payload);
            // return {books};
            return {books:[...state.books, ...action.payload]}
        case "DELETE_BOOK":
            const currentBookToDelete = [...state.books];
            const indexToDelete = currentBookToDelete.findIndex(
                function(book) {
                    return book.id === action.payload.id;
                }
            )
            return {books: [...currentBookToDelete.slice(0, indexToDelete), 
            ...currentBookToDelete.slice(indexToDelete + 1)]};
        case "UPDATE_BOOK":
                const currentBookToUpdate = [...state.books];
                const indexToUpdate = currentBookToUpdate.findIndex(
                    function(book) {
                        return book.id === action.payload.id;
                    }
                );
                const newBookToUpdate = {
                    ...currentBookToUpdate[indexToUpdate],
                    title: action.payload.title
                }
                console.log("what is it newBookToUpdate : ", newBookToUpdate);
                return {books: [...currentBookToUpdate.slice(0, indexToUpdate),
                newBookToUpdate, ... currentBookToUpdate.slice(indexToUpdate + 1)]}
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

