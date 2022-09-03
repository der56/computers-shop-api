"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const parsePassword = (passwordFromRequest) => {
    if (!isString(passwordFromRequest)) {
        throw new Error('Incorrect or missing password');
    }
    return passwordFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseState = (stateFromRequest) => {
    if (!isString(stateFromRequest) || !isState(stateFromRequest)) {
        throw new Error('Incorrect or missing state');
    }
    return stateFromRequest;
};
const parsePowerSupply = (powerSupplyFromRequest) => {
    if (!isString(powerSupplyFromRequest) || !isPowerSupply(powerSupplyFromRequest)) {
        throw new Error('Incorrect or missing power supply');
    }
    return powerSupplyFromRequest;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isString = (string) => {
    return typeof string === 'string';
};
const isState = (param) => {
    return Object.values(enums_1.State).includes(param);
};
const isPowerSupply = (param) => {
    return Object.values(enums_1.PowerSupply).includes(param);
};
const toNewComputerEntry = (object) => {
    const newEntry = {
        password: parsePassword(object.password),
        date: parseDate(object.date),
        state: parseState(object.state),
        powerSupply: parsePowerSupply(object.powerSupply)
    };
    return newEntry;
};
exports.default = toNewComputerEntry;
