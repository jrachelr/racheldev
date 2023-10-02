import MainContent from "../../components/MainContent";
import PostList from "../../components/PostList";
import getPostMetadata from "../../components/getPostMetadata";

export default function Page() {
  const postMetadata = getPostMetadata();
  return (
    <div>
      <MainContent>
        <h1 className="font-kasei font-bold text-4xl pb-8">Blog</h1>
        {postMetadata &&
          postMetadata
            .sort(
              (a, b) => new Date(b.date).getDate() - new Date(a.date).getDate()
            )
            .map((post) => <PostList key={post.slug} {...post} />)}
      </MainContent>
    </div>
  );
}
