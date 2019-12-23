"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: {
        first: String,
        last: String
    },
    address: {
        city: String,
        state: String,
        country: String
    },
    sex: String,
    profile_picture: String,
    activities: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Activity'
        }],
    strava_id: String,
    strava_session: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'StravaSession'
    }
});
exports.User = mongoose_1.model('User', UserSchema);
