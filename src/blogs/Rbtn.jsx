import React from "react";
import ReactionButton from "./ReactionButton";

const Rbtn = ({ pid }) => {
  return (
    <div className="flex-react">
      <ReactionButton postId={pid} type="like" />
      <ReactionButton postId={pid} type="love" />
      <ReactionButton postId={pid} type="wow" />
      <ReactionButton postId={pid} type="sad" />
    </div>
  );
};

export default Rbtn;
