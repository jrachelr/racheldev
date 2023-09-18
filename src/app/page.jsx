import About from "@/components/About";
import Navbar from "@/components/Navbar";
import PostList from "@/components/PostList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <About />
      <PostList />
    </main>
  );
}
