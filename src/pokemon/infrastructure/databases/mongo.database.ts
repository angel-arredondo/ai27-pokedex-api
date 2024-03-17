import { connect } from 'mongoose'

const initDatabase = async()=>{
    await connect(`${process.env.MONGO_URI}`)
}

export default initDatabase