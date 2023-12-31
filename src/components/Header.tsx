"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 m-0 w-full">
      <h1 className="text-3xl font-medium">
        <Link href="/">Rachel Johnson</Link>
      </h1>
    </header>
  );
}
