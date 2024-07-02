import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

import { conversation } from './services/websocket/conversation'

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = Number(process.env.PORT) || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = createServer((req, res) => {
        const parsedUrl = req.url ? parse(req.url, true) : undefined
        handle(req, res, parsedUrl)
    })

    server.listen(port, () => {
        console.info(`> Ready on ${hostname}:${port}`)
    })

    // the websocket features are used here
    conversation
})
