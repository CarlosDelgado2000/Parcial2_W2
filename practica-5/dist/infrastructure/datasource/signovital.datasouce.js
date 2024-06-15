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
exports.signovitalDatasourceImpl = void 0;
const posgre_1 = require("../../data/posgre");
const domain_1 = require("../../domain");
class signovitalDatasourceImpl {
    create(createsignovitalDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const signovital = yield posgre_1.prisma.signo_vital.create({
                data: createsignovitalDto
            });
            return domain_1.signovitalEntity.fromObject(signovital);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const signovital = yield posgre_1.prisma.signo_vital.findMany();
            return signovital.map(signovital => domain_1.signovitalEntity.fromObject(signovital));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const signovital = yield posgre_1.prisma.signo_vital.findFirst({
                where: { id }
            });
            if (!signovital)
                throw `control with id ${id} not found`;
            return domain_1.signovitalEntity.fromObject(signovital);
        });
    }
    updateById(UpdatesignovitalDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(UpdatesignovitalDto.id);
            const updatedsignovital = yield posgre_1.prisma.signo_vital.update({
                where: { id: UpdatesignovitalDto.id },
                data: UpdatesignovitalDto.values
            });
            return domain_1.signovitalEntity.fromObject(updatedsignovital);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield posgre_1.prisma.signo_vital.delete({
                where: { id }
            });
            return domain_1.signovitalEntity.fromObject(deleted);
        });
    }
}
exports.signovitalDatasourceImpl = signovitalDatasourceImpl;
