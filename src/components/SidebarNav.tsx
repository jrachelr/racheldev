import NavLink from "./NavLink";

export default function SidebarNav() {
  const links = [
    { label: "about", link: "/about" },
    { label: "blog", link: "/posts" },
    { label: "projects", link: "/projects" },
  ];

  return (
    <div className="w-1/5 h-full">
      <nav>
        <ul className="p-8">
          <li className="text-2xl font-medium flex flex-col">
            {links.map((link) => (
              <NavLink key={link.label} link={link} />
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}
