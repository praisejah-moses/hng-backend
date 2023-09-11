import { PersonModel } from "../model/personModel.js";

export async function dbGetPerson(req, res, next) {
    const personId = req.params.id;

    const person = await PersonModel.findOne(
        { $or: [{userId:personId},{slackName:personId}]}
    ).lean();
    if (!person) {
        res.statusCode = 500;
        return res.json({ errors: 'Error retriving' });
      }
    req.person = person;
    next()
}
