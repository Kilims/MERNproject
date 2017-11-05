"use strict"
import {combineReducers} from 'redux';

import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';
import {clientInfoReducers} from './clientInfoReducers';

export default combineReducers({
    books: booksReducers,
    cart: cartReducers,
    clientInfo: clientInfoReducers
})