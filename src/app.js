import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import { createRoles } from './libs/initSetUp'
const app = express()
createRoles()

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json('welcome')
})

app.use('/user',userRoutes)
app.use('/auth', authRoutes)
export default app;