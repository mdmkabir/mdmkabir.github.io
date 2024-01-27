import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReactionButton = ({ postId, type }) => {
  const [count, setCount] = useState(0);

  const iconfa = {
    like: "thumbs-up",
    love: "heart",
    haha: "laugh",
    wow: "surprise",
    sad: "sad-tear",
    angry: "angry",
  };

  useEffect(() => {
    const reactionRef = firebase.database().ref(`posts/${postId}/${type}`);
    reactionRef.once("value").then((snapshot) => {
      const initialCount = snapshot.val() || 0;
      setCount(initialCount);
    });
  }, []);

  // Function to handle reaction click
  const handleReaction = () => {
    // Update reaction count in Firebase
    const reactionRef = firebase.database().ref(`posts/${postId}/${type}`);
    reactionRef.transaction((currentCount) => (currentCount || 0) + 1);

    // Update local state to immediately reflect the change
    setCount(count + 1);
  };

  return (
    <button onClick={handleReaction} className="react-btn">
      <FontAwesomeIcon icon={`fa-regular fa-${iconfa[type]}`} /> <font style={{ fontSize: "13px" }}>({count})</font>
    </button>
  );
};

export default ReactionButton;
