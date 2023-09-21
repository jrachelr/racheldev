import SidebarNav from "../components/SidebarNav";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <SidebarNav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
