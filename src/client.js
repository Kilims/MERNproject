"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBook} from './actions/booksActions';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Menu from './components/menu';
import Footer from './components/footer';

import ClientDetailsTable from './components/ssManagement/clientDetailsTable';
import SelectSection from './components/ex/selectSection';

const Routes = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Menu />
                    <Switch>
                        <Route exact path="/" component={BooksList} />
                        <Route path="/admin" component={BooksForm} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/clientInfo" component={ClientDetailsTable} />                        
                        <Route path="/ex" component={SelectSection} />  
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
