"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlRoutes = void 0;
const express_1 = require("express");
const controller_ddd_1 = require("./controller.ddd");
const control_datasouce_1 = require("../../infrastructure/datasource/control.datasouce");
const control_repository_1 = require("../../infrastructure/repositories/control.repository");
class ControlRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new control_datasouce_1.controlDatasourceImpl();
        const ControlRepositoryImpl = new control_repository_1.controlRepositoryImpl(datasource);
        const ControlController = new controller_ddd_1.controlcontroller(ControlRepositoryImpl);
        router.get('/', ControlController.getcontroles);
        router.get('/:id', ControlController.getcontrolById);
        router.post('/', ControlController.createcontrol);
        router.put('/:id', ControlController.updatecontrol);
        router.delete('/:id', ControlController.deletecontrol);
        return router;
    }
}
exports.ControlRoutes = ControlRoutes;
