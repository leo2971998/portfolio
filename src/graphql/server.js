import { createYoga } from "@graphql-yoga/node"
import { createServer } from "http" // Changed from 'node:http' to fix npm error
import { schema } from "./schema.js"
import { authenticate } from "./auth.js"
import { PrismaClient } from "@prisma/client"
import { createLoaders } from "./dataloader.js"

const prisma = new PrismaClient()

const yoga = createYoga({
  schema,
  context: ({ request }) => {
    const user = authenticate(request)
    const loaders = createLoaders(prisma)
    return { prisma, user, loaders }
  },
})

// This check ensures the server only runs when you execute this file directly
// (e.g., `node src/graphql/server.js`)
const isMainModule = import.meta.url.endsWith(process.argv[1])

if (isMainModule) {
  const port = process.env.PORT || 4000
  const server = createServer(yoga)
  server.listen(port, () => {
    console.log(`🚀 GraphQL server running on http://localhost:${port}/graphql`)
  })
}

export { yoga }
