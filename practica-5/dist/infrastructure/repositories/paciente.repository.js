"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacienteRepositoryImpl = void 0;
class pacienteRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createpacienteDto) {
        return this.datasource.create(createpacienteDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updatepacienteDto) {
        return this.datasource.updateById(updatepacienteDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.pacienteRepositoryImpl = pacienteRepositoryImpl;
