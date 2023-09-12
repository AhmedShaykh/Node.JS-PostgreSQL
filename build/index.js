import express from "express";
class App {
    app;
    constructor() {
        this.app = express();
    }
    ;
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Welcome Express App");
        });
    }
    ;
}
;
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("Server Successfully Started!");
});
