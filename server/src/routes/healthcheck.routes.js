import { Router } from "express";
const router = Router();
// importing controllers
import { healthCheck } from "../controllers/healthcheck.js";

router.route('/healthcheck').get(healthCheck);

export default router;
