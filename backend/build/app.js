"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const NotaFiscal_router_1 = require("./router/NotaFiscal.router");
const ErrorHandler_1 = __importDefault(require("./middlewares/ErrorHandler"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.express.use(express_1.default.json());
        this.express.use((0, cors_1.default)());
        this.express.use(ErrorHandler_1.default);
    }
    routes() {
        this.express.use(NotaFiscal_router_1.router);
    }
}
exports.default = new App().express;
