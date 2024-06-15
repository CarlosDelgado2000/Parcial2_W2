"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signovitalRoutes = void 0;
const express_1 = require("express");
const signovitalcontrooler_ddd_1 = require("./signovitalcontrooler.ddd");
const signovital_datasouce_1 = require("../../infrastructure/datasource/signovital.datasouce");
const signovital_repository_copy_1 = require("../../infrastructure/repositories/signovital.repository copy");
class signovitalRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new signovital_datasouce_1.signovitalDatasourceImpl();
        const signovitalRepository = new signovital_repository_copy_1.signovitalRepositoryImpl(datasource);
        const signovitalController = new signovitalcontrooler_ddd_1.SignovitalController(signovitalRepository);
        router.get('/', signovitalController.getsignovital);
        router.get('/:id', signovitalController.getsignovitalById);
        router.post('/', signovitalController.createsignovital);
        router.put('/:id', signovitalController.updatesignovital);
        router.delete('/:id', signovitalController.deletesignovital);
        return router;
    }
}
exports.signovitalRoutes = signovitalRoutes;
