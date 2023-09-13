"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_js_1 = __importDefault(require("./config/database.js"));
const NoteRouter_js_1 = __importDefault(require("./router/NoteRouter.js"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.databaseSync();
        this.plugins();
        this.routes();
    }
    ;
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    ;
    databaseSync() {
        var _a;
        const db = new database_js_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
    ;
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Welcome To Express App");
        });
        this.app.use("/api/v1/note", NoteRouter_js_1.default);
    }
    ;
}
;
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("Server Successfully Started!");
});
