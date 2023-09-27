import NavLink from "./NavLink";

const links = [
  { label: "about", link: "/about" },
  { label: "blog", link: "/posts" },
  { label: "projects", link: "/projects" },
];

export default function SidebarNav() {
  return (
    <nav>
      <div className="w-2/5">
        <ul className="p-8">
          <li className="text-2xl font-medium flex flex-col">
            {links.map((link) => (
              // eslint-disable-next-line react/jsx-key
              <NavLink link={link} />
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}
