import { Router } from "express"
import {updatePerson} from '../../controller/stage-two/updatePersonController.js'
import { dbGetPerson } from "../../middleware/getUserMiddleware.js"



const router = Router()

router.patch('/:id',dbGetPerson,updatePerson)

export default router;