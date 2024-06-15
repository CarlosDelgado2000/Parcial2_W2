"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlRepositoryImpl = void 0;
class controlRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createcontrolDto) {
        return this.datasource.create(createcontrolDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updatecontrolDto) {
        return this.datasource.updateById(updatecontrolDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.controlRepositoryImpl = controlRepositoryImpl;
