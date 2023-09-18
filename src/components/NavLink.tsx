"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ link }) {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }
  return (
    <Link
      href={link.link}
      //   className={pathname == '/' ? '' }
    >
      <span className="stroke-gray-400 hover:stroke-violet-600 transition duration-200 "></span>
    </Link>
  );
}
