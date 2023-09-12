import { PersonModel } from "../model/personModel.js";

export async function dbGetPerson(req, res, next) {
    const personId = req.params.id;

    const person = await PersonModel.findOne(
        { $or: [{userId:personId},{name:personId}]}
    ).lean();
    if (!person) {
        return res.status(404).json({ errors: 'Error retriving' });
      }
    req.person = person;
    next()
}
