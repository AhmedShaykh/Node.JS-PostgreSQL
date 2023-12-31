import express, { Application, Request, Response } from "express";
import * as swaggerDocument from "./swagger.json";
import Database from "./config/database.js";
import NoteRouter from "./router/NoteRouter.js";
import swaggerUi from "swagger-ui-express";

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.databaseSync();
        this.plugins();
        this.routes();
        this.swaggerUi();
    };

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    };

    protected databaseSync(): void {
        const db = new Database();
        db.sequelize?.sync();
    };

    protected routes(): void {
        this.app.use("/api/v1/note", NoteRouter);
    };

    protected swaggerUi(): void {
        this.app.use("/api/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    };
};

const port: number = 8080;

const app = new App().app;

app.listen(port, () => {
    console.log("Server Successfully Started!");
});