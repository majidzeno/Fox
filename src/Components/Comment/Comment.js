import React from "react";
import "./Comment.css";

const Coomment = ({ comment }) => {
  return (
    <div className="comment">
      <p className="commentUser">{comment.email}</p>
      <p>{comment.body}</p>
    </div>
  );
};

export default Coomment;
