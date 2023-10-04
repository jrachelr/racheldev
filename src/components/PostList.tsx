import PostPreview from "./PostPreview";
import { PostType } from "../lib/PostType";

type Props = {
  posts: PostType[];
};

export default function PostList({ posts }: Props) {
  return (
    <section>
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
    </section>
  );
}
