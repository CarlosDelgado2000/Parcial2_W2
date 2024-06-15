"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signovitalRepositoryImpl = void 0;
class signovitalRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createsignovitalDto) {
        return this.datasource.create(createsignovitalDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updatesignovitalDto) {
        return this.datasource.updateById(updatesignovitalDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.signovitalRepositoryImpl = signovitalRepositoryImpl;
