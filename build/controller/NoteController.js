"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const NoteRepo_js_1 = require("../repo/NoteRepo.js");
const Note_js_1 = require("../model/Note.js");
class NoteController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_note = new Note_js_1.Note();
                new_note.name = req.body.name;
                new_note.description = req.body.description;
                yield new NoteRepo_js_1.NoteRepo().save(new_note);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully Created Note!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    ;
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_note = new Note_js_1.Note();
                new_note.id = id;
                new_note.name = req.body.name;
                new_note.description = req.body.description;
                yield new NoteRepo_js_1.NoteRepo().update(new_note);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully Updated Note!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    ;
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                yield new NoteRepo_js_1.NoteRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully Deleted Note!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    ;
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_note = yield new NoteRepo_js_1.NoteRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully Fetched Note By ID!",
                    data: new_note,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    ;
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_note = yield new NoteRepo_js_1.NoteRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully Fetched All Notes Data!",
                    data: new_note,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    ;
}
;
exports.default = new NoteController();
