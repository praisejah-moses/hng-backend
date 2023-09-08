import express from 'express'
import routes from './src/route.js'

const app = express()

app.use(routes)


app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})