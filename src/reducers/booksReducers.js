"use strict"

export function booksReducers(state={books:
    [{
        _id: 1,
        title: 'this is book title',
        description: 'this is book des',
        price: 111.12
    },
    {
        _id: 2,
        title: 'this is book title',
        description: 'this is book des',
        price: 222.22
    }]
}, action) {
    switch (action.type) {
        case "GET_BOOKS":
            // let books = state.books.concat(action.payload);
            // return {books};
            return {...state, books:[...state.books]};
        case "POST_BOOK":
            // let books = state.books.concat(action.payload);
            // return {books};
            return {books:[...state.books, ...action.payload]}
        case "DELETE_BOOK":
            const currentBookToDelete = [...state.books];
            const indexToDelete = currentBookToDelete.findIndex(
                function(book) {
                    return book._id == action.payload;
                }
            )
            return {books: [...currentBookToDelete.slice(0, indexToDelete), 
            ...currentBookToDelete.slice(indexToDelete + 1)]};
        case "UPDATE_BOOK":
                const currentBookToUpdate = [...state.books];
                const indexToUpdate = currentBookToUpdate.findIndex(
                    function(book) {
                        return book._id === action.payload._id;
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