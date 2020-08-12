'use strict'
var app = require('../../server/server');
var ds = app.datasources.mysqldb;

module.exports = function (Login){
    Login.disableRemoteMethodByName('create');
    Login.disableRemoteMethodByName('replaceOrCreate');
    Login.disableRemoteMethodByName('upsertWithWhere');
    Login.disableRemoteMethodByName('change_stream');
    Login.disableRemoteMethodByName('upsert');
    Login.disableRemoteMethodByName('updateAll');
    Login.disableRemoteMethodByName('prototype.updateAttributes');
    Login.disableRemoteMethodByName('find');
    Login.disableRemoteMethodByName('findById');
    Login.disableRemoteMethodByName('findOne');
    Login.disableRemoteMethodByName('deleteById');
    Login.disableRemoteMethodByName('confirm');
    Login.disableRemoteMethodByName('count');
    Login.disableRemoteMethodByName('exists');
    Login.disableRemoteMethodByName('resetPassword');
    Login.disableRemoteMethodByName('prototype.__count__accessTokens');
    Login.disableRemoteMethodByName('prototype.__create__accessTokens');
    Login.disableRemoteMethodByName('prototype.__delete__accessTokens');
    Login.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
    Login.disableRemoteMethodByName('prototype.__findById__accessTokens');
    Login.disableRemoteMethodByName('prototype.__get__accessTokens');
    Login.disableRemoteMethodByName('prototype.__updateById__accessTokens');
    Login.disableRemoteMethodByName('replaceById');
    Login.disableRemoteMethodByName('createChangeStream');

    Login.storeCredentials = function(firstName, lastName, phoneNumber, userName, password, callback) {
        console.log(firstName,' ', lastName,' ', phoneNumber,' ', password, ' ', userName);

        var toStroreData = {
            'first_name':firstName,
            'last_name':lastName,
            'phone_number':phoneNumber,
            'email':userName,
            'user_password':password,
        }

        Login.create(toStroreData, function(err, result) {
            let responseMsg;
            if(err) {
                responseMsg = 'Something Went Wrong';
                callback(null,responseMsg);
            } else {
                console.log('This is Result :', result);
                responseMsg = 'Sign Up successfully !!!';
                callback(null,responseMsg);
            }
        })
    }

    Login.remoteMethod('storeCredentials',{
        http:{status: 201, verb:'post', path:'/storeCredentials'},
        description: 'add User Credentials',
        accepts:[
            { arg: 'firstName', type: 'string'},
            {arg: 'lastName', type: 'string'},
            {arg: 'phoneNumber', type: 'number'},
            {arg: 'userName', type: 'string'},
            {arg: 'password', type: 'string'},
        ],
        returns: {arg: 'data', type: [], root: true},
    });
}