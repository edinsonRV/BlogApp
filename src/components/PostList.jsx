import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, onDelete, onUpdate }) => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Posts</h2>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">There's not post to show.</p>
      ) : (
        posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.title}
            description={post.description}
            onDelete={() => onDelete(post.id)}
            onUpdate={() => onUpdate(post.id)}
          />
        ))
      )}
    </div>
  );
};

export default PostList;
