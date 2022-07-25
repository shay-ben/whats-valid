const { gql } = require('apollo-server-express');
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  pollsVoted: [ID]
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
  user(id: ID!): User
  me: User
  polls: [Poll]
  poll(id: ID!): Poll
  hasVoted(pollID: ID!, userID: ID!): Boolean
}
type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  deleteUser(id: ID!): String
  createPoll(name: String, question: String!, optionsArr: [String]): Poll
  deletePoll(id: ID!): String
  deleteAllPolls: String
  vote(pollID: ID!, optionID: ID!, userID: ID!): Poll
}
`;
module.exports = typeDefs;