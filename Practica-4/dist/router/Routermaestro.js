"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maestroControl_1 = require("../controllers/maestroControl");
const router = (0, express_1.Router)();
router.get('/', maestroControl_1.getAllTablas);
exports.default = router;
