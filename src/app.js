import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/user.routes'
const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json('welcome')
})

app.use('/user',userRoutes)
export default app;