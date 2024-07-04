import { Hono } from 'hono';

const app = new Hono()

app.post((c) => c.text('hello world!'))
app.put((c) => c.text('hello world!'))
app.get('/:id', (c) => c.text('hello world!'))
app.get('/bulk', (c) => c.text('hello world!'))

export default app