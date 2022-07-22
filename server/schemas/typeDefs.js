const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type poll {
        _id: ID
        question: String
        options: [String]

    }

    type Query {
        poll: [poll]
    }
`;

module.exports = typeDefs;
