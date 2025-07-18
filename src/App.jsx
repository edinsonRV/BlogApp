import { useEffect, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error cargando los posts:", error));
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar el post");
        }
        // Actualiza el estado quitando el post eliminado
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h1>BlogApp</h1>
      <PostForm onAddPost={handleAddPost} />
      <PostList posts={posts} onDelete={handleDeletePost} />
    </>
  );
}

export default App;
