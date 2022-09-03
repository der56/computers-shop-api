"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComputer = exports.getComputersWithoutSesitiveInfo = exports.findByiD = exports.getComputers = void 0;
const computers_json_1 = __importDefault(require("./computers.json"));
const computers = computers_json_1.default; // using the asercion types
const getComputers = () => computers;
exports.getComputers = getComputers;
const findByiD = (id) => {
    const entry = computers.find(c => c.id === id);
    if (entry != null) {
        const { password } = entry, restofComputer = __rest(entry, ["password"]);
        return restofComputer;
    }
    return undefined;
};
exports.findByiD = findByiD;
const getComputersWithoutSesitiveInfo = () => {
    return computers.map(({ id, date, state, powerSupply }) => {
        return {
            id,
            date,
            state,
            powerSupply
        };
    });
};
exports.getComputersWithoutSesitiveInfo = getComputersWithoutSesitiveInfo;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const addComputer = (newComputerEntry) => {
    const newComputer = Object.assign({ id: Math.max(...computers.map(c => c.id)) + 1 }, newComputerEntry);
    computers.push(newComputer);
    return newComputer;
};
exports.addComputer = addComputer;
