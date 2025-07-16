import { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Primer post", description: "Este es el primer post." },
    { id: 2, title: "Segundo post", description: "Contenido del segundo post." },
  ]);

  return (
    <>
      <h1>BlogApp</h1>
      <PostList posts={posts} />
    </>
  );
}

export default App;
