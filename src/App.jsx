import { useEffect, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error cargando los posts:", error));
  }, []);

  return (
    <>
      <h1>BlogApp</h1>
      <PostForm onAddPost={handleAddPost} />
      <PostList posts={posts} />
    </>
  );
}

export default App;
