import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
        pollsVoted
        _id
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        _id
      }
    }
  }
`;

export const ADD_POLL = gql`
  mutation addPoll($question: String!, $name: String, $optionsArr: [String]) {
    createPoll(question: $question, name: $name, optionsArr: $optionsArr) {
      _id
      name
      question
      options {
        _id
        optionBody
        numVotes
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
  }
`;

export const DELETE_POLL = gql`
  mutation deletePoll($deletePollId: ID!) {
    deletePoll(id: $deletePollId)
  }
`;

export const VOTE = gql`
  mutation Vote($pollId: ID!, $optionId: ID!, $userId: ID!) {
    vote(pollID: $pollId, optionID: $optionId, userID: $userId) {
      _id
      name
      question
      options {
        _id
        numVotes
        optionBody
      }
    }
  }
`;