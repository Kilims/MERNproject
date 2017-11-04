"use strict"
import React from 'react'
import {Row, Col, Well, Button, Image} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, updateCart} from '../../actions/cartActions';

class BookItem extends React.Component{
    constructor(){
        super();
        this.state = {
            isClicked: false
        }
    }

    handleCart(){
        const book = [...this.props.cart, {
            _id:this.props._id,
            title: this.props.title,
            description: this.props.description,
            images: this.props.images,
            price: this.props.price,
            quantity: 1
        }]
        //Check if the cart is empty
        if (this.props.cart.length > 0) {
            //Cart is not empty
            let _id = this.props._id;

            let cartIndex = this.props.cart.findIndex(function(cart) {
                return cart._id === _id;
            })

            if (cartIndex === -1) {
                this.props.addToCart(book);
            } else {
                this.props.updateCart(_id, 1, this.props.cart);
            }
        } else {
            //Cart is empty
            this.props.addToCart(book);
        }
        
    }

    onReadMore(){
        this.setState({isClicked:true});
    }

    render(){
        return(
            <Well>
                <Row>
                    <Col xs={12} sm={6}>
                        <Image src={this.props.images} responsive />
                    </Col>
                    <Col xs={12} sm={6}>
                        <h6>{this.props.title}</h6>
                        <p>{(this.props.description.length > 50 && this.state.isClicked === false) ?
                            (this.props.description.substring(0, 50)) : (this.props.description)}
                            <button className='link' onClick={this.onReadMore.bind(this)}>
                                {(this.state.isClicked === false && this.props.description !== null && this.props.description.length > 50) ?
                                    ('...read more'):('')}
                            </button>
                        </p>
                        <h6>{this.props.price}</h6>
                        <Button bsStyle='primary' onClick={this.handleCart.bind(this)} >Buy now</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addToCart: addToCart,
        updateCart: updateCart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);