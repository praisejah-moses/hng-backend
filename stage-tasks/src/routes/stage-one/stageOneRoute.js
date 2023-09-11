import { Router } from "express"
import { root, stageOneController} from "../../controller/stage-one/stageOneController.js"

const router = Router()

router.get('/stage-one/api',stageOneController)

export default router;
