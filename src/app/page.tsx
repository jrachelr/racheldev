import Navbar from "../components/Navbar";
import About from "../components/About";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <About />
      <PostList />
    </main>
  );
}
