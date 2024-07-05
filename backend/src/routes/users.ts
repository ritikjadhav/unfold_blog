import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { jwt, sign, verify } from 'hono/jwt'

const app = new Hono<{
    Bindings: { // To get the right types on c.env, when initializing the Hono app, pass the types of env as a generic
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()

app.post('/signup', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate())
    
        const body = await c.req.json()
        const existingUser = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
        if (existingUser) {
            return c.text('Oops! It looks like this email is already taken. Try a different one!')
        }
        
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        })
        const token = await sign({ id: user.id }, c.env.JWT_SECRET )
    
        return c.json({
            jwt: token
        })   
    } catch (e) {
        c.status(403)
        c.json({ error: 'Well, this is awkward. Something went wrong. Try again in a bit!' })
    }
})

app.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password
        }
    })

    if (!user) {
        return c.text('Hmm, that email or password didn\'t work. Double-check your spelling and try again!')
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    return c.json({
        jwt: token
    })
})

export default app