import React from "react";
import PostList from "../../components/PostList";

type Props = {
  allPosts: PostType[];
};

export default function PostListPage({ allPosts }: Props) {
  return (
    <section>
      <h3>Blog</h3>
      <div>
        <PostList posts={allPosts} />
      </div>
    </section>
  );
}
