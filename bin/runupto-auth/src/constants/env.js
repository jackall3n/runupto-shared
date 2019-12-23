"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, _b = _a.PORT, PORT = _b === void 0 ? '7000' : _b, MONGO_URL = _a.MONGO_URL, MONGO_USERNAME = _a.MONGO_USERNAME, MONGO_PASSWORD = _a.MONGO_PASSWORD, STRAVA_CLIENT_ID = _a.STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET = _a.STRAVA_CLIENT_SECRET, STRAVA_URL = _a.STRAVA_URL, STRAVA_CLIENT_URL = _a.STRAVA_CLIENT_URL;
var env = {
    port: Number(PORT),
    mongo_url: MONGO_URL,
    mongo_username: MONGO_USERNAME,
    mongo_password: MONGO_PASSWORD,
    strava_client_id: STRAVA_CLIENT_ID,
    strava_client_secret: STRAVA_CLIENT_SECRET,
    strava_url: STRAVA_URL,
    strava_client_url: STRAVA_CLIENT_URL
};
console.log('env', env);
exports.default = env;
