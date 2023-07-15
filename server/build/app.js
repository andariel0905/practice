"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_index_1 = __importDefault(require("./routes/routes_index"));
const Cors = require('cors');
const Morgan = require('morgan');
const App = (0, express_1.default)();
App.use(express_1.default.json());
App.use(Cors());
App.use(Morgan("dev"));
App.use('/', routes_index_1.default);
exports.default = App;
