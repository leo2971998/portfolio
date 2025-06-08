# Portfolio

This project uses **React** with **Vite** for the frontend and includes a simple
GraphQL API powered by **GraphQL Yoga** and **Prisma**. The API exposes project,
blog and contact message data that can be consumed by the frontend.

## Getting Started

Install dependencies (requires Node.js and npm or pnpm):

```bash
npm install
```

Generate the Prisma client and start the GraphQL server:

```bash
npx prisma generate
node src/graphql/server.js
```

Run the development server for the frontend:

```bash
npm run dev
```

### Overwriting remote branches

If you want to override the remote branch when pushing changes and avoid manual
merge conflicts, you can force push your local branch:

```bash
git push --force origin main
```

Use this carefully because it discards any commits on the remote branch that are
not in your local history.
