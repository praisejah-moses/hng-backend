import { dbDeletePerson } from "../../work/dbWork.js"

export async function deletePerson(req, res) {
    try{
        const {userId} = req.person;
        const status = dbDeletePerson(userId)
        if(status){
            res.status(200).json({status: `deleted user with id: ${userId}`});
        }
    }catch(err){
        res.status(500).send(err.message)
    }
}