"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const Router_1 = require("./control/Router");
const routes_1 = require("./signoVital/routes");
const Router_2 = require("./Paciente/Router");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/control', Router_1.ControlRoutes.routes);
        router.use('/api/paciente', Router_2.pacienteRoutes.routes);
        router.use('/api/signovital', routes_1.signovitalRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
