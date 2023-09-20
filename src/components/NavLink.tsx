"use client";

// import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ link }) {
  //   const pathname = usePathname();
  //   let isActive = false;

  //   if (pathname === link.link) {
  //     isActive = true;
  //   }
  return (
    <Link
      href={link.link}
      //   className={pathname == '/' ? '' }
    >
      {link.label}
    </Link>
  );
}
