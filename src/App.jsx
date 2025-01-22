import React from "react";
import PostProvider from "./context/PostContext";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./App.css";

const App = () => {
  return (
    <PostProvider>
      <div className="App">
        <h1>La Poste</h1>
        <PostForm />
        <PostList />
      </div>
    </PostProvider>
  );
};

export default App;
