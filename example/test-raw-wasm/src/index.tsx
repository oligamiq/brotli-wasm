import { Hono } from 'hono'
import { renderer } from './renderer'
import { compress } from './compress'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
    return c.render(<h1>Hello!</h1>)
})

app.get('/compress', async (c) => {
    const input = new TextEncoder().encode('Hello, Brotli!')
    const compressed = await compress(input)
    return c.json({
        original: input,
        compressed: compressed
    })
})

export default app
