import { createNoteSchema, updateNoteSchema } from "../schema/NoteSchema.js";
import NoteController from "../controller/NoteController.js";
import BaseRoutes from "./base/BaseRouter.js";
import validate from "../helper/validate.js";

class NoteRoutes extends BaseRoutes {

    public routes(): void {
        this.router.post("", validate(createNoteSchema), NoteController.create);
        this.router.put("/:id", validate(updateNoteSchema), NoteController.update);
        this.router.delete("/:id", NoteController.delete);
        this.router.get("", NoteController.findAll);
        this.router.get("/:id", NoteController.findById);
    };

};

export default new NoteRoutes().router;