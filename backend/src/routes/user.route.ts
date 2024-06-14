import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export const userRouter = new Hono<{ Bindings: { DATABASE_URL: string } }>()

userRouter.post('/signup', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    })

    return c.json(user)
  } catch (error) {
    console.log(error)
  }
})

userRouter.post('/signin')
