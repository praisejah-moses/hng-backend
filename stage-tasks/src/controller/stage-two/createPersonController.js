import { dbSavePerson } from "../../work/dbWork.js"

export async function createPerson(req, res) {
    try{
        const {userId,name,track,currentStage} = req.body
        const person = await dbSavePerson(userId,name, track, currentStage)
        if(person){
            res.status(201).send(person)
        }
    }catch(err){
        res.status(500).send(err.message)
    }
}