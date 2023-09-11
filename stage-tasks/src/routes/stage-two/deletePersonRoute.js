import { Router } from "express"
import {deletePerson} from '../../controller/stage-two/deletePersonController.js'
import { dbGetPerson } from "../../middleware/getUserMiddleware.js"

const router = Router()

router.delete('/:id',dbGetPerson,deletePerson)

export default router;