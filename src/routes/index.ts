import { Router } from "express";
import { indexWelcome } from '../controllers';

const router = Router();

router.route('/').get(indexWelcome);

export default router;
