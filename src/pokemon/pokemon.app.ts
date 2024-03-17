
import express from 'express'
import cors from 'express'
import pokemonRoute from './infrastructure/v1/routes/pokemon.route'
import dotenv from 'dotenv'
import initDatabase from './infrastructure/databases/mongo.database'
dotenv.config()

const app= express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT || 3001

app.use(pokemonRoute)

app.listen(PORT, ()=>{
    initDatabase()
    console.log(`Server running on port ${PORT} 🚀`)
})