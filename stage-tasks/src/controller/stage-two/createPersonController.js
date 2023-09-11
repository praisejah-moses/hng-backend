import { dbSavePerson } from "../../work/dbWork.js"

export async function createPerson(req, res) {
    try{
    const {userId,slackName,track,currentStage} = req.body
    const person = await dbSavePerson(userId,slackName, track, currentStage)
    if(person){
        res.status(200).send(person)
    }
    }catch(err){
        res.status(500).send(err.message)
    }
}