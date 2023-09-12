import { dbUpdatePerson } from "../../work/dbWork.js"

export async function updatePerson(req, res) {
    try{
        const {name,track,currentStage} = req.body
        const {userId} = req.person
        const updateStatus= await dbUpdatePerson(userId,name,track,currentStage)
        if(updateStatus){
            res.status(200).send(updateStatus)
        }
    }catch(err){
        res.status(500).send(err.message)
    }   
}