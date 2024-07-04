import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
    Bindings: { // To get the right types on c.env, when initializing the Hono app, pass the types of env as a generic
        DATABASE_URL: string
    }
}>()

app.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    
    await prisma.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    })

    return c.text('hello world!')
})
app.post('/signin', (c) => c.text('hello world!'))

export default app