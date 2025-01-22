import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

const PostList = () => {
  const { state } = useContext(PostContext);

  return (
    <div className="post-list">
      {state.posts.length === 0 ? (
        <p>Aucun post pour le moment.</p>
      ) : (
        <ul>
          {state.posts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
