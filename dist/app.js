"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
const PORT = 4000;
// Configure session middleware
app.use((0, express_session_1.default)({
    secret: "gfg-key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 5000 }
}));
// set session in the '/' route
app.get('/', (req, res) => {
    req.session.name = "johnDoe";
    res.send("Session data set");
});
// get session in the '/getSession' route
app.get('/getSession', (req, res) => {
    if (req.session.name) {
        res.json({
            status: "ok",
            session: req.session.name
        });
    }
    else {
        res.json({
            status: "ok",
            session: "not found"
        });
    }
});
app.listen(PORT, () => {
    console.log(` _________ on est près _________`);
});
