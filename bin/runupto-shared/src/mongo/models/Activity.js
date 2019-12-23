"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ActivitySchema = new mongoose_1.Schema({
    description: String
});
exports.Activity = mongoose_1.model('Activity', ActivitySchema, 'Activities');
