import { Hono } from 'hono'
import { serve, type HttpBindings } from '@hono/node-server'
// or `Http2Bindings` if you use HTTP2

type Bindings = HttpBindings & {
  /* ... */
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.json({
    remoteAddress: c.env.incoming.socket.remoteAddress,
  })
})

serve(app)


// import { serve } from '@hono/node-server'
// import { Hono } from 'hono'

// const app = new Hono()
// app.get('/', (c) => c.text('Hello Node.js!'))

// serve(app)

// // ポートの番号を変える書き方
// serve({
//   fetch: app.fetch,
//   port: 8787,
// })

// const app = new Hono()

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

// app.get('/api/hello', (c) => {
//   return c.json({
//     ok: true,
//     message: 'Hello Hono!',
//   })
// })

// app.get('/posts/:id', (c) => {
//   const page = c.req.query('page')
//   const id = c.req.param('id')
//   c.header('X-Message', 'Hi!')
//   return c.text(`You want to see ${page} of ${id}`)
// })

// app.post('/posts', (c) => c.text('Created!', 201))
// app.delete('/posts/:id', (c) =>
//   c.text(`${c.req.param('id')} is deleted!`)
// )

// serve({
//   fetch: app.fetch,
//   port: 3000
// }, (info) => {
//   console.log(`Server is running on http://localhost:${info.port}`)
// })

// const View = () => `
//   <!DOCTYPE html>
//   <html>
//     <head>
//       <title>Hono Page</title>
//     </head>
//     <body>
//       <h1>Hello Hono!</h1>
//     </body>
//   </html>
// `

// app.get('/page', (c) => {
//   return c.html(View())
// })

// serve({
//   fetch: app.fetch,
//   port: 3000
// }, (info) => {
//   console.log(`Server is running on http://localhost:${info.port}`)
// })