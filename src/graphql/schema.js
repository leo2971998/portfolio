import { makeExecutableSchema } from "@graphql-tools/schema"
import { GraphQLError } from "graphql"

const typeDefs = /* GraphQL */ `
  type Project {
    id: ID!
    title: String!
    slug: String!
    tech: [String!]!
    repoUrl: String
    liveUrl: String
    coverImg: String
    blurb: String
    body: String
    claps: Int!
  }

  type Education {
    id: ID!
    institution: String!
    degree: String!
    fieldOfStudy: String!
    startDate: String!
    endDate: String
    description: String
    logoUrl: String
  }

  type Certification {
    id: ID!
    name: String!
    issuingOrganization: String!
    issueDate: String!
    credentialId: String
    credentialUrl: String
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
    
    educations: [Education!]!
    certifications: [Certification!]!

    posts(page: Int): [BlogPost!]!
    post(id: ID, slug: String): BlogPost
  }

  input ProjectInput {
    title: String!
    slug: String!
    tech: [String!]!
    repoUrl: String!
    liveUrl: String
    coverImg: String!
    blurb: String
    body: String!
  }

  input EducationInput {
    institution: String!
    degree: String!
    fieldOfStudy: String!
    startDate: String!
    endDate: String
    description: String
    logoUrl: String
  }

  input CertificationInput {
    name: String!
    issuingOrganization: String!
    issueDate: String!
    credentialId: String
    credentialUrl: String
  }

  type Mutation {
    sendMessage(name: String!, email: String!, subject: String, body: String!): ContactMessage!
    clapProject(id: ID!): Project!

    # Admin Mutations
    createProject(input: ProjectInput!): Project!
    updateProject(id: ID!, input: ProjectInput!): Project!
    deleteProject(id: ID!): Project!

    createEducation(input: EducationInput!): Education!
    updateEducation(id: ID!, input: EducationInput!): Education!
    deleteEducation(id: ID!): Education!

    createCertification(input: CertificationInput!): Certification!
    updateCertification(id: ID!, input: CertificationInput!): Certification!
    deleteCertification(id: ID!): Certification!
  }
`

const adminOnly = (resolver) => (parent, args, context, info) => {
  // In a real app, you'd check for an admin role on the user object
  if (!context.user) {
    throw new GraphQLError("You must be logged in to perform this action.", {
      extensions: { code: "UNAUTHENTICATED" },
    })
  }
  return resolver(parent, args, context, info)
}

export const resolvers = {
  Query: {
    projects: (_parent, args, context) => context.prisma.project.findMany({ orderBy: { id: "desc" } }),
    project: (_parent, { id, slug }, context) => {
      if (id) return context.loaders.projectById.load(id)
      return context.prisma.project.findUnique({ where: { slug } })
    },
    educations: (_parent, args, context) => context.prisma.education.findMany({ orderBy: { startDate: "desc" } }),
    certifications: (_parent, args, context) =>
      context.prisma.certification.findMany({ orderBy: { issueDate: "desc" } }),

    posts: (_parent, args, context) => context.prisma.blogPost.findMany(),
    post: (_parent, { id, slug }, context) =>
      context.prisma.blogPost.findUnique({
        where: id ? { id: Number(id) } : { slug },
      }),
  },
  Mutation: {
    sendMessage: (_parent, input, context) => context.prisma.contactMessage.create({ data: input }),
    clapProject: (_parent, { id }, context) =>
      context.prisma.project.update({
        where: { id: Number(id) },
        data: { claps: { increment: 1 } },
      }),

    // Admin mutations
    createProject: adminOnly((_parent, { input }, context) => context.prisma.project.create({ data: input })),
    updateProject: adminOnly((_parent, { id, input }, context) =>
      context.prisma.project.update({ where: { id: Number(id) }, data: input }),
    ),
    deleteProject: adminOnly((_parent, { id }, context) =>
      context.prisma.project.delete({ where: { id: Number(id) } }),
    ),

    createEducation: adminOnly((_parent, { input }, context) => context.prisma.education.create({ data: input })),
    updateEducation: adminOnly((_parent, { id, input }, context) =>
      context.prisma.education.update({ where: { id: Number(id) }, data: input }),
    ),
    deleteEducation: adminOnly((_parent, { id }, context) =>
      context.prisma.education.delete({ where: { id: Number(id) } }),
    ),

    createCertification: adminOnly((_parent, { input }, context) =>
      context.prisma.certification.create({ data: input }),
    ),
    updateCertification: adminOnly((_parent, { id, input }, context) =>
      context.prisma.certification.update({ where: { id: Number(id) }, data: input }),
    ),
    deleteCertification: adminOnly((_parent, { id }, context) =>
      context.prisma.certification.delete({ where: { id: Number(id) } }),
    ),
  },
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })
