"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainSearchRouter = express_1.default.Router();
mainSearchRouter.get("/", (_req, res) => { return res.send('Ping!'); });
exports.default = mainSearchRouter;
