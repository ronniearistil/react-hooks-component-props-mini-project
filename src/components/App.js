import React from "react";
import blogData from "../data/blog";
import Header from "./Header";  // Make sure the path is relative to components folder
import About from "./About";    // Import the About component
import ArticleList from "./ArticleList";  // Import the ArticleList component

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

