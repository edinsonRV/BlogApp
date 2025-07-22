import { useEffect, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

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
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    setEditingPost(null);
  };

  const handleEditPost = (postId) => {
    const postToEdit = posts.find((p) => p.id === postId);
    setEditingPost(postToEdit);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-8">
        BlogApp con Tailwind CSS
      </h1>
      <PostForm
        onAddPost={handleAddPost}
        onUpdatePost={handleUpdatePost}
        postToEdit={editingPost}
      />
      <PostList
        posts={posts}
        onDelete={handleDeletePost}
        onUpdate={handleEditPost}
      />
    </div>
  );
}

export default App;
