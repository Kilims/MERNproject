"use strit"
var mongoose = require('mongoose');

var clientInfoSchema = mongoose.Schema({
    clientName: String,
    clientEmail: String,
    clientPhoneNumber: String,
    clientWechat: String,
    port: Number,
    portPwd: String,
    serverIP: String,
    expireDate: String,
    payments_info: String,
    billDate: String
})

var ClientInfoSchema = mongoose.model('ClientInfo', clientInfoSchema);
module.exports = ClientInfoSchema;