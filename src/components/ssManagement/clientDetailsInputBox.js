"use strict"
import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Panel, FormGroup, ControlLabel, FormControl, Well} from 'react-bootstrap';
import styled from 'styled-components';



class ClientDetailsInputBox extends React.Component{    

    render(){
        return (
                <Well>
                    <FormGroup controlId="name">
                        <ControlLabel>Client Name</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Client Name"
                            ref="name" />
                    </FormGroup>
                    <FormGroup controlId="billDate">
                        <ControlLabel>Bill Date</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Format: YYYY-MM-DD"
                            ref="billDate" />
                    </FormGroup>
                    <FormGroup controlId="expireDate">
                        <ControlLabel>Expire Date</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Format: YYYY-MM-DD"
                            ref="expireDate" />
                    </FormGroup>
                    <FormGroup controlId="paymentInfo">
                        <ControlLabel>Payment Info</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Format: YYYY-MM-DD"
                            ref="paymentInfo" />
                    </FormGroup>
                </Well>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailsInputBox);