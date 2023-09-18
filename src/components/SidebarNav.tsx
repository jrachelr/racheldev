import Link from "next/link";

export default function SidebarNav() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <ul className="flex">
            <Link href="/aboutme">
              <h1 className="text-2xl font-medium">
                <span className="text-teal-500">About</span>
              </h1>
            </Link>
            <Link href="/blog">
              <h1 className="text-2xl font-medium">
                <span className="text-teal-500">Blog</span>
              </h1>
            </Link>
            <Link href="/photos">
              <h1 className="text-2xl font-medium">
                <span className="text-teal-500">Photos</span>
              </h1>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
