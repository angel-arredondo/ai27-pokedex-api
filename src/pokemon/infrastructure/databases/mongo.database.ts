import { connect } from 'mongoose'
import { DatabaseError } from '../utils/error.classes'
import { labels } from '../constants/labels'

const initDatabase = async()=>{
    try{
        await connect(`${process.env.MONGO_URI}`)
    }catch(e: unknown){
        throw new DatabaseError(`${labels.errors.database.connection}, ${
            e instanceof Error ?
            e.message : 'unknown'}`
        )
    }
}

export default initDatabase