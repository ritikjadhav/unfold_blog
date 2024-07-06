import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { CreatePostInput, UpdatePostInput } from '@ritiksjadhav/unfold-common';
import { Hono } from 'hono';

const app = new Hono<{
    Bindings: { 
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>()

app.post(async (c) => {
    try {
        const body = await c.req.json()        
        const { success, error } = CreatePostInput.safeParse(body)
        if (!success) {
            return c.json({
                errors: error,
                error: error.issues.map((issue) => {
                    return `message: ${issue.message}`
                })
            });
        }

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate())

        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get('userId'),
                published: body.published
            }
        })

        c.status(201)
        return c.json({
            postId: post.id,
            message: 'Your blog post has been created! The internet just got a little more interesting.'
        })
    } catch (e) {
        c.status(400)
        return c.text('Looks like you forgot to fill out some fields. Your blog post needs all the pieces to make sense!')
    }
})

app.put(async (c) => {
    try {
        const body = await c.req.json()
        const { success, error } = UpdatePostInput.safeParse(body)
        if (!success) {
            return c.json({
                error: error.issues.map((issue) => {
                    return `message: ${issue.message}`
                })
            });
        }

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate())

        const post = await prisma.post.update({
            where: {
                id: body.id,
                authorId: c.get('userId')
            },
            data: {
                title: body.title,
                content: body.content,
                published: body.published
            },
        })

        c.status(200)
        return c.text('Your blog post has been updated! It\'s now even better than before.')

    } catch (e) {
        c.status(404)
        return c.text('We couldn\'t find the blog post you want to edit. Maybe it wandered off?')
    }
})

app.get('/bulk', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate())

        const blog = await prisma.post.findMany({})        

        c.status(200)
        return c.json({
            message: 'Here are all the blog posts! Dive in and enjoy the read.',
            blog: blog
        })
    } catch (e) {
        c.status(404)
        return c.text('Looks like there are no blog posts yet. Time to start writing!')
    }
})

app.get('/:id', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate())

        const blog = await prisma.post.findUnique({
            where: { id: c.req.param('id') }
        })        

        c.status(200)
        return c.json({
            message: 'Here\'s your blog post! Happy reading.',
            blog: blog
        })
    } catch (e) {
        c.status(404)
        return c.text('The blog post you\'re looking for is nowhere to be found. Maybe it got lost in the ether.')
    }
})

export default app