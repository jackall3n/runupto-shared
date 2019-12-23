"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var StravaSessionSchema = new mongoose_1.Schema({
    strava_id: Number,
    access_token: String,
    refresh_token: String,
    token_type: String,
    expires_at: Number,
    expires_in: Number,
    scope: String
});
exports.StravaSession = mongoose_1.model('StravaSession', StravaSessionSchema, 'strava_sessions');
