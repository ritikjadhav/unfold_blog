import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { SigninInput, SignupInput } from '@ritiksjadhav/unfold-common'

const app = new Hono<{
    Bindings: {
        // To get the right types on c.env, when initializing the Hono app, pass the types of env as a generic
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>()

app.post('/signup', async (c) => {
    try {
        const body = await c.req.json()
        const { success, error } = SignupInput.safeParse(body)
        if (!success) {
            c.status(400)
            return c.json({
                error: error.issues[0].message,
            })
        }
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const existingUser = await prisma.user.findUnique({
            where: {
                email: body.email,
            },
        })
        if (existingUser) {
            c.status(401)
            return c.json({
                error: 'Oops! It looks like this email is already taken. Try a different one!',
            })
        }

        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
            },
        })
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)

        c.status(201)
        return c.text(token)
    } catch (e) {
        c.status(403)
        c.json({
            error: 'Well, this is awkward. Something went wrong. Try again in a bit!',
        })
    }
})

app.post('/signin', async (c) => {
    const body = await c.req.json()
    const { success, error } = SigninInput.safeParse(body)
    if (!success) {
        c.status(400)
        return c.json({
            error: error.issues.map((issue) => {
                return issue.message
            }),
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password,
        },
    })

    if (!user) {
        c.status(401)
        return c.json({
            error: "Hmm, that email or password didn't work. Double-check your spelling and try again!",
        })
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET)

    c.status(200)
    return c.text(token)
})

export default app
