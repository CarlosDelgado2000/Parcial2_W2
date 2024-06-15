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
exports.pacienteDatasourceImpl = void 0;
const posgre_1 = require("../../data/posgre");
const domain_1 = require("../../domain");
class pacienteDatasourceImpl {
    create(createpacienteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente = yield posgre_1.prisma.paciente.create({
                data: createpacienteDto
            });
            return domain_1.pacienteEntity.fromObject(paciente);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente = yield posgre_1.prisma.paciente.findMany();
            return paciente.map(paciente => domain_1.pacienteEntity.fromObject(paciente));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente = yield posgre_1.prisma.paciente.findFirst({
                where: { id }
            });
            if (!paciente)
                throw `paciente with id ${id} not found`;
            return domain_1.pacienteEntity.fromObject(paciente);
        });
    }
    updateById(updatepacienteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updatepacienteDto.id);
            const updatedpaciente = yield posgre_1.prisma.paciente.update({
                where: { id: updatepacienteDto.id },
                data: updatepacienteDto.values
            });
            return domain_1.pacienteEntity.fromObject(updatedpaciente);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield posgre_1.prisma.paciente.delete({
                where: { id }
            });
            return domain_1.pacienteEntity.fromObject(deleted);
        });
    }
}
exports.pacienteDatasourceImpl = pacienteDatasourceImpl;
