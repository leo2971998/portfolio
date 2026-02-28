import { createYoga } from "@graphql-yoga/node"
import { createServer } from "http"
import { fileURLToPath } from "url"
import { PrismaClient } from "@prisma/client"

import { authenticate } from "./auth.js"
import { createLoaders } from "./dataloader.js"
import { schema } from "./schema.js"

const prisma = new PrismaClient()

const yoga = createYoga({
  schema,
  context: ({ request }) => {
    const user = authenticate(request)
    const loaders = createLoaders(prisma)
    return { prisma, user, loaders }
  },
})

// Run the server only when this file is executed directly.
const isMainModule = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]

if (isMainModule) {
  const port = process.env.PORT || 4000
  const server = createServer(yoga)
  server.listen(port, () => {
    console.log(`GraphQL server running on http://localhost:${port}/graphql`)
  })
}

export { yoga }
