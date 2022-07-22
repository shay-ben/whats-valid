const { Thought } = require('../models');

const resolvers = {
  Query: {
    question: async () => [
        { 
            question:"who is the better team?",
            options:["group 1", "group 2", "group 3"]
    },
]

module.exports = resolvers;