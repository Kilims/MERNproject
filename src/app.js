"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBook} from './actions/booksActions';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Menu from './components/menu';
import Footer from './components/footer';

const Routes = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Menu />
                    <Switch>
                        <Route exact path="/" component={BooksList} />
                        <Route path="/admin" component={BooksForm} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
)

render(
    Routes,
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

