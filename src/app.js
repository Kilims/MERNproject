"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBook} from './actions/booksActions';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';
import Menu from './components/menu';
import Footer from './components/footer';

render(
    <Provider store={store}>
        <div>
            <Menu />
            <BooksList />
            <Footer />
        </div>
    </Provider> ,
    document.getElementById('app')
);

// store.dispatch(postBooks(
    
// ));

// store.dispatch(postBooks(
//     [{
//         id: 3,
//         title: 'this is book title',
//         description: 'this is book des',
//         price: 333.33
//     }]
// ));

// store.dispatch(deleteBooks(
//     {
//         id: 1
//     }
// ));

// store.dispatch(updateBook(
//     {
//         id: 3,
//         title: 'update book title',
//         description: 'this is book des',
//         price: 444.444
//     }
// ));



//=========cart
// store.dispatch(addToCart([{id: 3}]));

