import PostPreview from "./PostPreview";
import React from "react";

type Props = {
  posts: PostType[];
};

export default function PostList({ posts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          subtitle={post.subtitle}
          slug={post.slug}
        />
      ))}
    </div>
  );
}
