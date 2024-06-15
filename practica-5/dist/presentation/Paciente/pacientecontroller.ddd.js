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
exports.pacientecontroller = void 0;
const DTOs_1 = require("../../domain/DTOs");
class pacientecontroller {
    //* Inyección de dependencia
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
        this.getpacientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pacientes = yield this.pacienteRepository.getAll();
            return res.json(pacientes);
        });
        this.getpacienteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const paciente = yield this.pacienteRepository.findById(id);
                res.json(paciente);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
        this.createpaciente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createpacienteDto] = DTOs_1.CreatepacienteDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const todo = yield this.pacienteRepository.create(createpacienteDto);
            res.json(todo);
        });
        this.updatepaciente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatepacienteDto] = DTOs_1.UpdatepacienteDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const updatedpaciente = yield this.pacienteRepository.updateById(updatepacienteDto);
            return res.json(updatedpaciente);
        });
        this.deletepaciente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const deletedTodo = yield this.pacienteRepository.deleteById(id);
            res.json(deletedTodo);
        });
    }
}
exports.pacientecontroller = pacientecontroller;
