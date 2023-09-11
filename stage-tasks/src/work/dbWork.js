import { PersonModel } from "../model/personModel.js";

export const dbSavePerson = async(userId,slackName,track,currentStage)=>{
    const person = await PersonModel.create({
        userId,
        slackName,
        track,
        currentStage,
    });
    return person
}

export const dbDeletePerson = async(userId)=>{
    const deleteStatus = await PersonModel.deleteOne({ userId });
    return deleteStatus
}

export const dbUpdatePerson = async(userId,slackName,track,currentStage)=>{
    const updateStatus = await PersonModel.updateOne(
        { userId },
        { $set: {slackName: slackName,track: track,currentStage: currentStage}},
        { new: true }
    );
    return updateStatus
}