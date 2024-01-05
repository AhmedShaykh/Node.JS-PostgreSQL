"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NoteSchema_js_1 = require("../schema/NoteSchema.js");
const NoteController_js_1 = __importDefault(require("../controller/NoteController.js"));
const BaseRouter_js_1 = __importDefault(require("./base/BaseRouter.js"));
const validate_js_1 = __importDefault(require("../helper/validate.js"));
class NoteRoutes extends BaseRouter_js_1.default {
    routes() {
        this.router.post("/", (0, validate_js_1.default)(NoteSchema_js_1.createNoteSchema), NoteController_js_1.default.create);
        this.router.put("/:id", (0, validate_js_1.default)(NoteSchema_js_1.updateNoteSchema), NoteController_js_1.default.update);
        this.router.delete("/:id", NoteController_js_1.default.delete);
        this.router.get("/", NoteController_js_1.default.findAll);
        this.router.get("/:id", NoteController_js_1.default.findById);
    }
    ;
}
;
exports.default = new NoteRoutes().router;
