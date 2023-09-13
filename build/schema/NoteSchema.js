"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteSchema = exports.createNoteSchema = void 0;
const zod_1 = require("zod");
exports.createNoteSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(4, { message: "Name Must Be Greater Than 4 Characters!" }),
        description: zod_1.z
            .string()
            .min(7, { message: "Description Must Be Greater Than 7 Characters!" }),
    }),
});
exports.updateNoteSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z
        .object({
        name: zod_1.z
            .string()
            .min(4, { message: "Name Must Be Greater Than 4 Characters!" }),
        description: zod_1.z
            .string()
            .min(7, { message: "Description Must Be Greater Than 7 Characters!" }),
    })
        .partial()
});
