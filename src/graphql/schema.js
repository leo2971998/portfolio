import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = /* GraphQL */ `
  type Project {
    id: ID!
    title: String!
    slug: String!
    tech: [String!]!
    repoUrl: String
    coverImg: String
    blurb: String
    body: String
  }

  type BlogPost {
    id: ID!
    title: String!
    slug: String!
    tags: [String!]!
    coverImg: String
    excerpt: String
    body: String
    createdAt: String!
  }

  type ContactMessage {
    id: ID!
    name: String!
    email: String!
    subject: String
    body: String
    createdAt: String!
  }

  type Query {
    projects(limit: Int, filter: String): [Project!]!
    project(id: ID, slug: String): Project
    posts(page: Int): [BlogPost!]!
    post(id: ID, slug: String): BlogPost
  }

  type Mutation {
    sendMessage(
      name: String!
      email: String!
      subject: String
      body: String!
    ): ContactMessage!
    clapProject(id: ID!): Project!
  }
`;

export const resolvers = {
  Query: {
    projects: (_parent, args, context) => context.prisma.project.findMany(),
    project: (_parent, { id, slug }, context) => {
      if (id) {
        return context.loaders.projectById.load(id);
      }
      return context.prisma.project.findUnique({ where: { slug } });
    },
    posts: (_parent, args, context) => context.prisma.blogPost.findMany(),
    post: (_parent, { id, slug }, context) =>
      context.prisma.blogPost.findUnique({
        where: id ? { id: Number(id) } : { slug },
      }),
  },
  Mutation: {
    sendMessage: (_parent, input, context) =>
      context.prisma.contactMessage.create({ data: input }),
    clapProject: (_parent, { id }, context) =>
      context.prisma.project.update({
        where: { id: Number(id) },
        data: { claps: { increment: 1 } },
      }),
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
