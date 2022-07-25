const { AuthenticationError } = require('apollo-server-express');
const { User, Poll } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      else {
        console.log('context.user', context.user);
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    polls: async () => {
      return Poll.find();
    },
    user: async (parent, { username }) => {
      return Poll.findOne({ _id: id });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    createPoll: async (parent, {name, question, optionsArr}) => {
      console.log("optionsArr", optionsArr);
      const poll = await Poll.create({ name, question });
      let result = "";
      for (let i=0; i < optionsArr.length; i++) {
        result = await Poll.findOneAndUpdate(
            { _id: poll._id},
            { $push: {options: {optionBody: optionsArr[i]}}},
            {new: true});
         console.log("result:", result);   
      }
      return result;
    },
    deletePoll: async (parent, {id}) => {
      const poll = await Poll.findByIdAndDelete(id);
      return `Your ${poll.name} poll was deleted!`;
    },
    deleteAllPolls: async (parent, args) => {
      await Poll.deleteMany();
      return `All polls were deleted`;
    },
    vote: async (parent, {pollID, optionID}) => {
      const result = await Poll.findOneAndUpdate(
        {_id: pollID, 'options._id': optionID}, 
        { $inc: {'options.$.numVotes': 1}}
      );
      console.log(result);
      return result;
    }
  },
};

module.exports = resolvers;
