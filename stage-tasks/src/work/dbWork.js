import { PersonModel } from "../model/personModel.js";

export const dbSavePerson = async(userId,name,track,currentStage)=>{
    const person = await PersonModel.create({
        userId,
        name,
        track,
        currentStage,
    });
    return person
}

export const dbDeletePerson = async(userId)=>{
    const deleteStatus = await PersonModel.deleteOne({ userId });
    return deleteStatus
}

export const dbUpdatePerson = async(userId,name,track,currentStage)=>{
    const updateStatus = await PersonModel.updateOne(
        { userId },
        { $set: {name: name,track: track,currentStage: currentStage}},
        { new: true }
    );
    return updateStatus
}