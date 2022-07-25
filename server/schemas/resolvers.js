const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Poll } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, args) => {
      const result = await User.findById( args.id );
      console.log("get user result:", result);
      return result ? result : new UserInputError("No User with this ID");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      else {
        console.log('context.user', context.user);
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    polls: async () => {
      return await Poll.find();
    },
    poll: async (parent, args) => {
      const result = await Poll.findById( args.id );
      console.log("get poll result:", result);
      return result ? result : new UserInputError("No Poll with this ID");
    },
    hasVoted: async (parent, {pollID, userID}) => {
      return true;
    }
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
    deleteUser: async (parent, {id}) => {
      const user = await User.findByIdAndDelete(id);
      return `User ${user.username} was deleted!`;
    },
    createPoll: async (parent, {name, question, optionsArr}) => {
      console.log("optionsArr", optionsArr);
      let options = [...optionsArr.map(optionBod => ({ optionBody: optionBod }))];
      const poll = await Poll.create({ name, question, options});
      return poll;
    },
    deletePoll: async (parent, {id}) => {
      const poll = await Poll.findByIdAndDelete(id);
      const users = await User.updateMany(
        {pollsVoted: id},
        { $pull: { pollsVoted: { $in: id } } },
      );
      return `Your ${poll.name} poll was deleted!`;
    },
    deleteAllPolls: async (parent, args) => {
      await Poll.deleteMany();
      return `All polls were deleted`;
    },
    vote: async (parent, {pollID, optionID, userID}) => {
      const result = await Poll.findOneAndUpdate(
        {_id: pollID, 'options._id': optionID}, 
        { $inc: {'options.$.numVotes': 1}},
        {new: true}
      );
      console.log(result);
      const updatedUser = await User.findOneAndUpdate(
        {_id: userID},
        { $push: { pollsVoted: pollID }},
        { new: true}
      );
      console.log(updatedUser);
      return result;
    },
  },
};

module.exports = resolvers;
