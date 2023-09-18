import SidebarNav from "../components/SidebarNav";
import About from "../components/About";
import PostList from "../components/PostList";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SidebarNav />
        <About />
        <PostList />
      </main>
    </>
  );
}
