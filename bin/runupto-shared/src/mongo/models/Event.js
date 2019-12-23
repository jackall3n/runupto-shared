"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var EventSchema = new mongoose_1.Schema({
    description: String
});
exports.Event = mongoose_1.model('Event', EventSchema);
