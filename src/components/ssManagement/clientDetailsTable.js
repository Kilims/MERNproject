"use strict"
import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Table, Button, Collapse, Col} from 'react-bootstrap';

import { getClientInfo } from "../../actions/clientInfoActions";
import ClientDetailsInputBox from './clientDetailsInputBox';

class ClientDetailsTable extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){
        this.props.getClientInfo();
    }

    render(){
        const clientInfo_list = this.props.clientInfo.map(function(clientInfo_Arr, i) {
            return(
                <tr>
                    <td>{i+1}</td>
                    <td>{clientInfo_Arr.clientName}</td>
                    <td>{clientInfo_Arr.port}</td>
                    <td>{clientInfo_Arr.portPwd}</td>
                    <td>{clientInfo_Arr.serverIP}</td>
                    <td>{clientInfo_Arr.billDate}</td>
                    <td>{clientInfo_Arr.expireDate}</td>
                    <td>{clientInfo_Arr.payments_info}</td>
                    <td>{clientInfo_Arr.clientEmail}</td>
                    <td>{clientInfo_Arr.clientPhoneNumber}</td>
                    <td>{clientInfo_Arr.clientWechat}</td>
                </tr>
            )
        })

        return (
            <Grid>                
                <Row>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Client Name</th>                            
                                <th>Port</th>
                                <th>Port Password</th>
                                <th>Server IP</th>
                                <th>Bill Date</th>
                                <th>Expire Date</th>
                                <th>Payment Info</th>
                                <th>Client Email</th>
                                <th>Client Phone</th>
                                <th>Client Wechat</th>
                            </tr>
                        </thead>
                            <tbody>
                            {clientInfo_list}
                            </tbody>
                    </Table>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => this.setState({ open: !this.state.open })}>
                            Add New Client
                        </Button>
                    </Col> 
                    <Col>
                        <Collapse in={this.state.open}>
                            <div>
                                {<ClientDetailsInputBox />}
                            </div>
                        </Collapse>
                    </Col>                                                               
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return{
        clientInfo: state.clientInfo.clientInfo
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getClientInfo: getClientInfo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailsTable);