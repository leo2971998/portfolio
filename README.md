# Portfolio

This project uses **React** with **Vite** for the frontend and includes a simple
GraphQL API powered by **GraphQL Yoga** and **Prisma**. The API exposes project,
blog and contact message data that can be consumed by the frontend.

## Getting Started

Install dependencies (requires Node.js and npm or pnpm):

\`\`\`bash
npm install
\`\`\`

Generate the Prisma client and start the GraphQL server:

\`\`\`bash
npx prisma generate
node src/graphql/server.js
\`\`\`

Run the development server for the frontend:

\`\`\`bash
npm run dev
\`\`\`

The interface includes a light/dark mode switcher accessible from the navigation bar.
