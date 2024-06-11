import { Hono } from 'hono'

const app = new Hono()

app.post('/signup')

app.post('/signin')

export default app
