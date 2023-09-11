import express from 'express'
import morgan from "morgan";
import createPerson from './src/routes/stage-two/createPersonRoute.js'
import deletePerson from './src/routes/stage-two/deletePersonRoute.js'
import getPerson from './src/routes/stage-two/getPersonRoute.js'
import updatePerson from './src/routes/stage-two/updatePersonRoute.js'
import dotenv from "dotenv";
import connectDB from './src/configs/dbConfig.js';
import { root } from './src/controller/stage-one/stageOneController.js';

const app = express()

dotenv.config();
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.get('/',root)
app.use('/api',createPerson,getPerson,updatePerson,deletePerson)

const dbReady = await connectDB()
if (dbReady){
    app.listen(3000, () => {
        console.log(`SERVER STARTED`)
    })
}