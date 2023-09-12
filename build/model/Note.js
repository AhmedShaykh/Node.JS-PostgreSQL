var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, DataType, Model, Table } from "sequelize-typescript";
let Note = class Note extends Model {
    static NOTE_TABLE_NAME = "note";
    static NOTE_ID = "id";
    static NOTE_NAME = "name";
    static NOTE_DESCRIPTION = "description";
    // @ts-ignore
    id;
    name;
    description;
};
__decorate([
    Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Note.NOTE_ID,
    })
    // @ts-ignore
    ,
    __metadata("design:type", Number)
], Note.prototype, "id", void 0);
__decorate([
    Column({
        type: DataType.STRING(100),
        field: Note.NOTE_NAME,
    }),
    __metadata("design:type", String)
], Note.prototype, "name", void 0);
__decorate([
    Column({
        type: DataType.STRING(255),
        field: Note.NOTE_DESCRIPTION,
    }),
    __metadata("design:type", String)
], Note.prototype, "description", void 0);
Note = __decorate([
    Table({
        tableName: Note.NOTE_TABLE_NAME,
    })
], Note);
export { Note };
;
