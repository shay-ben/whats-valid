const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
}

type Option {
  _id: ID
  optionBody: String
  numVotes: Int
}

type Poll {
  _id: ID
  name: String
  question: String
  options: [Option]
}

type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]
  user(username: String!): User
  me: User
  polls: [Poll]
  poll(id: ID!): Poll
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  createPoll(name: String, question: String!, optionsArr: [String]): Poll
  deletePoll(id: ID!): String
  deleteAllPolls: String
}
`;

module.exports = typeDefs;
