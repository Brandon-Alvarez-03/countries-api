import mongoose from 'mongoose'


let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb://127.0.0.1:27017/countries_db', mongooseConnectionConfig)

// localhost and 127.0.0.1 are interchangeable either one is saying ayo this is MY COMP

mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))

export default mongoose.connection