import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const GET_ALL_POLLS = gql`
  query Polls {
    polls {
      _id
      name
      question
      options {
        optionBody
        numVotes
        _id
      }
    }
  }
`;

export const GET_POLL = gql`
  query Poll($pollId: ID!) {
    poll(id: $pollId) {
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

export const GET_USER = gql`
  query Query($userId: ID!) {
    user(id: $userId) {
      _id
      username
      email
      pollsVoted
    }
  }
`;

export const HAS_VOTED = gql`
  query hasVoted($pollId: ID!, $userId: ID!) {
    hasVoted(pollID: $pollId, userID: $userId)
  }
`;