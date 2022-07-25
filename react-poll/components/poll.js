import React, { useState, useEffect } from "react";
import "./Poll.css";

function Poll() {  
const [voteData, setVoteData] = useState();
const [totalVotes, setTotalVotes] = useState(0);
const [voted, setVoted] = useState(false);
}

const url = "http://localhost:5000/poll";
useEffect(() => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setVoteData(data);
      let sum = 0;
      data.forEach(function (obj) {
        sum += obj.votes;
      });
      setTotalVotes(sum);
    });
}, []);
}
export default Poll;