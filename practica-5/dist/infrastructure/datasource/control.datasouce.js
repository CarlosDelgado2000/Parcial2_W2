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
exports.controlDatasourceImpl = void 0;
const posgre_1 = require("../../data/posgre");
const domain_1 = require("../../domain");
class controlDatasourceImpl {
    create(createcontrolDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const control = yield posgre_1.prisma.control.create({
                data: createcontrolDto
            });
            return domain_1.controlEntity.fromObject(control);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const control = yield posgre_1.prisma.control.findMany();
            return control.map(control => domain_1.controlEntity.fromObject(control));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const control = yield posgre_1.prisma.control.findFirst({
                where: { id }
            });
            if (!control)
                throw `control with id ${id} not found`;
            return domain_1.controlEntity.fromObject(control);
        });
    }
    updateById(updatecontrolDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updatecontrolDto.id);
            const updatedcontrol = yield posgre_1.prisma.control.update({
                where: { id: updatecontrolDto.id },
                data: updatecontrolDto.values
            });
            return domain_1.controlEntity.fromObject(updatedcontrol);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield posgre_1.prisma.control.delete({
                where: { id }
            });
            return domain_1.controlEntity.fromObject(deleted);
        });
    }
}
exports.controlDatasourceImpl = controlDatasourceImpl;
