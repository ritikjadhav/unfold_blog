import { Hono } from 'hono'
import users from './routes/users'
import blogs from './routes/blogs'
import { verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/extension'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  },
  Variables: {
    userId: string,
    prisma: PrismaClient
  }
}>()

// app.use('*', async (c, next) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL
//   }).$extends(withAccelerate())

//   c.set('prisma', prisma) // to implement
//   await next()
// })

app.use('/api/v1/blog/*', async (c, next) => {
  const token = c.req.header('Authorization')?.split(' ')[1]
  if (!token) {
    c.status(401)
    return c.text('No sneaking allowed! Please sign in to perform this action.')
  }

  const decodedPayload = await verify(token, c.env.JWT_SECRET)
  if (!decodedPayload) {
    c.status(401)
    return c.text('No sneaking allowed! Please sign in to perform this action.')
  }

  c.set('userId', decodedPayload.id as string)
  await next()
})

app.route('/api/v1/user', users)
app.route('/api/v1/blog', blogs)

export default app
