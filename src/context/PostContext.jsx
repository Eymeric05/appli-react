import React, { createContext, useReducer } from "react";
import { postReducer, initialState } from "../reducers/postReducer";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
