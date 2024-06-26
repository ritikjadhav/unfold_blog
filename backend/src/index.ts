import { Hono } from 'hono'
import { userRouter } from './routes/user.route'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>()

app.route('/api/v1/user', userRouter)

export default app
