"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const computers_1 = __importDefault(require("./routes/computers"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/ping', (_req, res) => {
    res.send('pong');
});
app.use('/api/computers', computers_1.default);
const port = (process.env.PORT != null) || 4000;
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
app.listen(port, () => console.log(`app ready on port ${port}`));
