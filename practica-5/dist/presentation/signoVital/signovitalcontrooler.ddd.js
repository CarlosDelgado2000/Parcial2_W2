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
exports.SignovitalController = void 0;
const DTOs_1 = require("../../domain/DTOs");
class SignovitalController {
    //* Inyección de dependencia
    constructor(signovitalRepository) {
        this.signovitalRepository = signovitalRepository;
        this.getsignovital = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const signovital = yield this.signovitalRepository.getAll();
            return res.json(signovital);
        });
        this.getsignovitalById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const signovital = yield this.signovitalRepository.findById(id);
                res.json(signovital);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
        this.createsignovital = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createsignovitalDto] = DTOs_1.CreatesignovitalDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const todo = yield this.signovitalRepository.create(createsignovitalDto);
            res.json(todo);
        });
        this.updatesignovital = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatesignovitalDto] = DTOs_1.UpdatesignovitalDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const updatedsignovital = yield this.signovitalRepository.updateById(updatesignovitalDto);
            return res.json(updatedsignovital);
        });
        this.deletesignovital = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const deletedTodo = yield this.signovitalRepository.deleteById(id);
            res.json(deletedTodo);
        });
    }
}
exports.SignovitalController = SignovitalController;
