import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Posts: </h2>
      {posts.map((post) => (
        <PostItem key={post.id} title={post.title} description={post.description} />
      ))}
    </div>
  );
};

export default PostList;
