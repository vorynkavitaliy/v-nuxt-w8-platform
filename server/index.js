const express = require('express')
const consola = require('consola')
const { loadNuxt, build } = require('nuxt')
const app = express()

const isDev = process.env.NODE_ENV !== 'production'

async function start() {
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

    const { host, port } = nuxt.options.server

    await nuxt.ready()

    if (isDev) {
        build(nuxt)
    }

    app.use(nuxt.render)

    app.listen(process.env.PORT || 3000, process.env.HOST || "127.0.0.1", () => {
        consola.ready({
            message: `Server listening on http://${host}:${port}`,
            badge: true,
        })
    })
}
start()
