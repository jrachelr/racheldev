import PostPreview from "./PostPreview";
import { getAllPosts } from "../lib/api";
import React from "react";

// type Props = {
//   allPosts: PostType[];
// };

export default function PostList() {
  const allPosts = getAllPosts(["title", "date", "slug", "subtitle"]);
  return (
    <div>
      {allPosts.map((post) => (
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
// export const getStaticProps = async () => {
//   const allPosts = getAllPosts(["title", "date", "slug", "subtitle"]);
//   console.log(getAllPosts());
//   return {
//     props: { allPosts },
//   };
// };
// getStaticProps();
