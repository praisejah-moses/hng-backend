import { Router } from "express"
import {getPerson} from '../../controller/stage-two/getPersonController.js'
import { dbGetPerson } from "../../middleware/getUserMiddleware.js"



const router = Router()

router.get('/:id',dbGetPerson,getPerson)

export default router;