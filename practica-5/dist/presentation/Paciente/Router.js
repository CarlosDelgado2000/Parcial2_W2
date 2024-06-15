"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacienteRoutes = void 0;
const express_1 = require("express");
const pacientecontroller_ddd_1 = require("./pacientecontroller.ddd");
const paciente_datasouce_1 = require("../../infrastructure/datasource/paciente.datasouce");
const paciente_repository_1 = require("../../infrastructure/repositories/paciente.repository");
class pacienteRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new paciente_datasouce_1.pacienteDatasourceImpl();
        const PacienteRepositoryImpl = new paciente_repository_1.pacienteRepositoryImpl(datasource);
        const pacienteController = new pacientecontroller_ddd_1.pacientecontroller(PacienteRepositoryImpl);
        router.get('/', pacienteController.getpacientes);
        router.get('/:id', pacienteController.getpacienteById);
        router.post('/', pacienteController.createpaciente);
        router.put('/:id', pacienteController.updatepaciente);
        router.delete('/:id', pacienteController.deletepaciente);
        return router;
    }
}
exports.pacienteRoutes = pacienteRoutes;
