"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = require("redis");
exports.connect = function (url) {
    var client;
    try {
        client = redis_1.createClient(url);
        client.on('connect', function () {
            console.log('connected to redis');
        });
        client.on('error', function (error) {
            console.log('redis on error', error);
        });
    }
    catch (e) {
        console.error('redis error', e);
        throw e;
    }
    return client;
};
