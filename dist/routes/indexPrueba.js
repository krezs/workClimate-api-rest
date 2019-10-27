"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
router.route('/').get(controllers_1.indexWelcome);
exports.IndexRoutes = router;
//# sourceMappingURL=indexPrueba.js.map