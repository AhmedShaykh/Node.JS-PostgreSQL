import { NoteRepo } from "../repo/NoteRepo.js";
import { Note } from "../model/Note.js";
import { Request, Response } from "express";

class NoteController {

    async create(req: Request, res: Response) {

        try {

            const new_note = new Note();

            new_note.name = req.body.name;

            new_note.description = req.body.description;

            await new NoteRepo().save(new_note);

            res.status(201).json({
                status: "Created!",
                message: "Successfully Created Note!",
            });

        } catch (error) {

            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }

    };

    async update(req: Request, res: Response) {

        try {

            let id = parseInt(req.params["id"]);

            const new_note = new Note();

            new_note.id = id;

            new_note.name = req.body.name;

            new_note.description = req.body.description;

            await new NoteRepo().update(new_note);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully Updated Note!",
            });

        } catch (error) {

            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }

    };

    async delete(req: Request, res: Response) {

        try {

            let id = parseInt(req.params["id"]);

            await new NoteRepo().delete(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully Deleted Note!",
            });

        } catch (error) {

            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }

    };

    async findById(req: Request, res: Response) {

        try {

            let id = parseInt(req.params["id"]);

            const new_note = await new NoteRepo().retrieveById(id);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully Fetched Note By ID!",
                data: new_note,
            });

        } catch (error) {

            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }

    };

    async findAll(req: Request, res: Response) {

        try {

            const new_note = await new NoteRepo().retrieveAll();

            res.status(200).json({
                status: "Ok!",
                message: "Successfully Fetched All Notes Data!",
                data: new_note,
            });

        } catch (error) {

            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });

        }
    };

};

export default new NoteController();