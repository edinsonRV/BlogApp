import React, { useState } from "react";

const PostForm = ({ onAddPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description } = formData;

    if (!title || !description) return;

    const newPost = {
      id: Date.now,
      title,
      description,
    };

    onAddPost(newPost);
    setFormData({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="body"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Publish</button>
    </form>
  );
};

export default PostForm;
