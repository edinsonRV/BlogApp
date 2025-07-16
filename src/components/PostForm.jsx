import React, { useState } from "react";

const PostForm = ({onAddPost}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    const newPost ={
        id:Date.now,
        title,
        description
    }

    onAddPost(newPost);
    setTitle('');
    setDescription('');

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="body"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Publish</button>
    </form>
  );
};

export default PostForm;
