import NavLink from "./NavLink";

export default function SidebarNav() {
  const links = [
    { label: "about", link: "/" },
    { label: "blog", link: "/blog" },
    { label: "projects", link: "/projects" },
  ];

  return (
    <div className="w-2/5">
      <ul className="p-8">
        <li className="text-2xl font-medium flex flex-col">
          {links.map((link) => (
            <NavLink key={"label"} link={link} />
          ))}
        </li>
      </ul>
    </div>
  );
}
