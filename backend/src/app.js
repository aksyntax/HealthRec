const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const morgan =require('morgan')

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({
    limit: "512kb"
}))
app.use(express.urlencoded({
    extended: true,
    limit: "512kb"
}))
app.use(cookieParser())
app.use(morgan('dev'))

const userRouter = require('./routes/user.route.js')
const hospitalRouter = require('./routes/hospital.route.js')
const recordRouter = require('./routes/record.route.js')

app.use('/api/v1/user', userRouter)
app.use('/api/v1/hosp', hospitalRouter)
app.use('/api/v1/reco', recordRouter)

module.exports = app