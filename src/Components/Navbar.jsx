import { navlinks } from "../Constants";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navlinks.map((nav) => (
          <li key={nav.id}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
