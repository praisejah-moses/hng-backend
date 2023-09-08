import { Router } from "express"
import { root, stageOneEndpoint } from "./controller.js"

const router = Router()

router.get('/',root)
router.get('/api',stageOneEndpoint)

export default router;
