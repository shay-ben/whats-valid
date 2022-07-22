export const getSavedPollIds = () => {
    const savedpollIds = localStorage.getItem('saved_polls')
      ? JSON.parse(localStorage.getItem('saved_polls'))
      : [];
  
    return savedPollIds;
  };
  
  export const saveBookIds = (pollIdArr) => {
    if (pollIdArr.length) {
      localStorage.setItem('saved_polls', JSON.stringify(pollIdArr));
    } else {
      localStorage.removeItem('saved_polls');
    }
  };
  
  export const removePollId = (pollId) => {
    const savedPollIds = localStorage.getItem('saved_polls')
      ? JSON.parse(localStorage.getItem('saved_polls'))
      : null;
  
    if (!savedPollIds) {
      return false;
    }
  
    const updatedSavedPollIds = savedPollsIds?.filter((savedPollId) => savedPollId !== PollId);
    localStorage.setItem('saved_polls', JSON.stringify(updatedPollsIds));
  
    return true;
  };