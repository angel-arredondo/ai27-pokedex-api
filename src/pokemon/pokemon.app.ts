
import express from 'express'
import cors from 'cors'
import { createRouter } from './infrastructure/v1/routes/pokemon.route'
import dotenv from 'dotenv'
import initMongoDb from './infrastructure/databases/mongo.database'
import helmet from 'helmet'
import { labels } from './infrastructure/constants/labels'
import { acceptedOrigins } from './infrastructure/constants/origins'
import { ErrorCors } from './infrastructure/utils/error.classes'
import { JfRepository } from './infrastructure/repository/jf.repository'
import { MongoRepository } from './infrastructure/repository/mongo.repository'

dotenv.config()

export const createApp = (repository: JfRepository | MongoRepository) => {

    const app = express()
    if(repository instanceof MongoRepository)
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
    
    app.use(createRouter(repository))
    
    app.listen(PORT, ()=>{
        if(repository instanceof MongoRepository){
            initMongoDb()
        }
        console.log(`${labels.init} ${PORT} 🚀`)
    })
}