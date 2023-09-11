import { Router } from "express"
import {createPerson} from '../../controller/stage-two/createPersonController.js'


const router = Router()

router.post('/',createPerson)

export default router;