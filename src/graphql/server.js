import { createYoga } from '@graphql-yoga/node';
import { createServer } from 'node:http';
import { createServer } from '@graphql-yoga/node';
import { schema } from './schema.js';
import { authenticate } from './auth.js';
import { PrismaClient } from '@prisma/client';
import { createLoaders } from './dataloader.js';

const prisma = new PrismaClient();
export const yoga = createYoga({
export const yoga = createServer({
  schema,
  context: ({ request }) => {
    const user = authenticate(request);
    const loaders = createLoaders(prisma);
    return { prisma, user, loaders };
  },
});

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = process.env.PORT || 4000;
  const server = createServer(yoga);
  server.listen(port, () => {
    console.log(`GraphQL server running on http://localhost:${port}/graphql`);
  });
  yoga.start({ port });
  console.log(`GraphQL server running on http://localhost:${port}/graphql`);
}
