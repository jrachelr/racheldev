"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Rachel Johnson
          </Link>
          <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
            <Link
              className="text-white/90 hover:text-white"
              href="https://github.com/jrachelr"
            >
              <FaGithub />
            </Link>
          </div>
        </h1>
      </div>
    </header>
  );
}
