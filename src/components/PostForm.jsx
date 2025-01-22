import React, { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";

const PostForm = () => {
  const [content, setContent] = useState("");
  const { dispatch } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    dispatch({ type: "ADD_POST", payload: content });
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        placeholder="Ajouter un nouveau post"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Publier</button>
    </form>
  );
};

export default PostForm;
