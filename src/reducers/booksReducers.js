"use strict"

export function booksReducers(state={books:[]
}, action) {
    switch (action.type) {
        case "GET_BOOKS":
            // let books = state.books.concat(action.payload);
            // return {books};
            return {...state, books:[...action.payload]};
        case "POST_BOOK":
            // let books = state.books.concat(action.payload);
            // return {books};
            return {...state, books:[...state.books, ...action.payload], msg: 'Saved! click to continue', style:'success', validation:'success'}
        case "POST_BOOK_REJECTED":
            return {...state, msg: 'Please try again', style:'danger', validation:'error'}
        case "RESET_BUTTON":
            return {...state, msg: null, style:'primary', validation:'null'}
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