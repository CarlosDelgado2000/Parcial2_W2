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
exports.controlcontroller = void 0;
const DTOs_1 = require("../../domain/DTOs");
class controlcontroller {
    //* Inyección de dependencia
    constructor(controlRepository) {
        this.controlRepository = controlRepository;
        this.getcontroles = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const controles = yield this.controlRepository.getAll();
            return res.json(controles);
        });
        this.getcontrolById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const control = yield this.controlRepository.findById(id);
                res.json(control);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
        this.createcontrol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createcontrolDto] = DTOs_1.CreatecontrolDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const todo = yield this.controlRepository.create(createcontrolDto);
            res.json(todo);
        });
        this.updatecontrol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatecontrolDto] = DTOs_1.UpdatecontrolDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const updatedcontrol = yield this.controlRepository.updateById(updatecontrolDto);
            return res.json(updatedcontrol);
        });
        this.deletecontrol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const deletedTodo = yield this.controlRepository.deleteById(id);
            res.json(deletedTodo);
        });
    }
}
exports.controlcontroller = controlcontroller;
