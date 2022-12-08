import express from 'express'
const app = express() 
import cors from "cors"
const port = 3001

import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.js'

app.listen(3001, () => {
    console.log(`server started on port ${port}`)
})

//to allow cross origin resource sharing
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser())
app.use('/api/auth', authRoutes)
