
import express from 'express'
import cors from 'cors'
import pokemonRoute from './infrastructure/v1/routes/pokemon.route'
import dotenv from 'dotenv'
import initDatabase from './infrastructure/databases/mongo.database'
import helmet from 'helmet'
import { labels } from './infrastructure/constants/labels'
import { acceptedOrigins } from './infrastructure/constants/origins'
import { ErrorCors } from './infrastructure/utils/error.classes'

dotenv.config()

const app = express()
app.use(helmet())
app.use(cors({
    origin:(origin, callback) => {
        if(!origin) return callback(null, true)
        if(acceptedOrigins.includes(origin)) return callback(null, true)
        return callback(new ErrorCors(labels.errors.cors))    
    }
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT || 3001

app.use(pokemonRoute)

app.listen(PORT, ()=>{
    initDatabase()
    console.log(`${labels.init} ${PORT} 🚀`)
})