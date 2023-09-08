import { Router } from "express"
import { root, stageOneEndpoint } from "./controller.js"

const router = Router()

router.get('/',root)
router.get('/stage-one',stageOneEndpoint)

export default router;
