import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { router } from "./routes";
import mongose from 'mongoose'


const mongoString = process.env.DATABASE_URL;
mongose.connect(mongoString);
const database = mongose.connection;


// conect database
database.once('connected', () => {
    
    console.log('Database Connected');

    const app = express()
    const PORT = process.env.PORT || 3333;

    app.use(express.json())
    app.use(router)

    app.listen(PORT, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${PORT}⚡️`)
    })
})

database.on('error', (error) => {
    console.log(error)
})



process.on('uncaughtException', (err) => {
    console.log(`erro no servidor ${err}`)
})