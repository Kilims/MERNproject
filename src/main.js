"use strict"
import React from 'react'
import Menu from './components/menu';
import Footer from './components/footer';
import PropTypes from 'prop-types';

class Main extends React.Component{
    render(){
        return(
            <div>
                <Menu />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

Main.propTypes = {
    children: PropTypes.object
}

export default Main;