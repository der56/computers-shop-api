"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerSupply = exports.State = void 0;
var State;
(function (State) {
    State["Bad"] = "bad";
    State["Ok"] = "ok";
    State["VeryGood"] = "very good";
    State["TooGood"] = "too good";
})(State = exports.State || (exports.State = {}));
var PowerSupply;
(function (PowerSupply) {
    PowerSupply["TwoHundred"] = "200w";
    PowerSupply["FiveHundred"] = "500w";
    PowerSupply["SevenHundredFifty"] = "750w";
    PowerSupply["OneThousandTwoHundred"] = "1200w";
})(PowerSupply = exports.PowerSupply || (exports.PowerSupply = {}));
