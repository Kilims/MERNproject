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

import routes from './routes';

const Routes = (
    <Provider store={store}>
        {routes}
    </Provider>
)

render(
    Routes,
    document.getElementById('app')
);
