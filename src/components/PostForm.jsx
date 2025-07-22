import React, { useState, useEffect } from "react";

const PostForm = ({ onAddPost, onUpdatePost, postToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Rellenar formulario si se va a editar
  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setDescription(postToEdit.description || "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [postToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newPost = {
      id: postToEdit ? postToEdit.id : Date.now(),
      title,
      description,
    };

    if (postToEdit) {
      onUpdatePost(newPost);
    } else {
      onAddPost(newPost);
    }

    // Limpiar formulario después
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 mb-8 w-full max-w-2xl"
    >
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
        {postToEdit ? "Update Post" : "Create Post"}
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          required  
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Description</label>
        <textarea
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Post description"
          required
        />
      </div>
      <button
        type="submit"
        className={`${
          postToEdit ? "bg-blue-600 hover:bg-blue-700" : "bg-indigo-600 hover:bg-indigo-700"
        } text-white px-6 py-2 rounded-md transition-colors`}
      >
        {postToEdit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default PostForm;
