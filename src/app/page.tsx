import SidebarNav from "../components/SidebarNav";

import Header from "../components/Header";
import PostList from "../components/PostList";
import getPostMetadata from "../components/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata();
  return (
    <>
      <Header />
      <SidebarNav />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1 className="font-kasei font-bold text-4xl pb-8">Blog</h1>
          {postMetadata &&
            postMetadata
              .sort(
                (a, b) =>
                  new Date(b.date).getDate() - new Date(a.date).getDate()
              )
              .map((post) => <PostList key={post.slug} {...post} />)}
        </div>
      </main>
    </>
  );
}
