"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const computerServices = __importStar(require("../services/computerServices"));
const dataValidator_1 = __importDefault(require("../utils/dataValidator"));
const computerRoute = express_1.default.Router();
computerRoute.get('/', (_req, res) => {
    res.send(computerServices.getComputersWithoutSesitiveInfo());
});
computerRoute.get('/:id', (req, res) => {
    const computer = computerServices.findByiD(+req.params.id); // + parse this to a number
    return (computer != null)
        ? res.send(computer)
        : res.status(404);
});
computerRoute.post('/', (req, res) => {
    try {
        const newComputerEntry = (0, dataValidator_1.default)(req.body);
        const addedComputerEntry = computerServices.addComputer(newComputerEntry);
        res.json(addedComputerEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports.default = computerRoute;
